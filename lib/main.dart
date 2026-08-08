import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'actions.dart';
import 'catalog.dart';
import 'theme.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  SystemChrome.setSystemUIOverlayStyle(
    const SystemUiOverlayStyle(
      statusBarColor: Colors.transparent,
      statusBarIconBrightness: Brightness.light,
    ),
  );
  runApp(const MixShowroomApp());
}

class MixShowroomApp extends StatelessWidget {
  const MixShowroomApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'MiX Showroom',
      debugShowCheckedModeBanner: false,
      theme: MixShowTheme.dark(),
      home: const ShowroomHome(),
    );
  }
}

class ShowroomHome extends StatefulWidget {
  const ShowroomHome({super.key});

  @override
  State<ShowroomHome> createState() => _ShowroomHomeState();
}

class _ShowroomHomeState extends State<ShowroomHome> {
  Catalog? _catalog;
  String? _error;
  String _query = '';
  String _category = 'All';
  Set<String> _favs = {};
  bool _grid = true;

  @override
  void initState() {
    super.initState();
    _boot();
  }

  Future<void> _boot() async {
    try {
      final cat = await Catalog.loadAsset();
      final prefs = await SharedPreferences.getInstance();
      final favs = prefs.getStringList('fav_ids')?.toSet() ?? {};
      final grid = prefs.getBool('grid_mode') ?? true;
      if (!mounted) return;
      setState(() {
        _catalog = cat;
        _favs = favs;
        _grid = grid;
        _error = null;
      });
    } catch (e) {
      if (!mounted) return;
      setState(() => _error = e.toString());
    }
  }

  Future<void> _toggleFav(String id) async {
    setState(() {
      if (_favs.contains(id)) {
        _favs.remove(id);
      } else {
        _favs.add(id);
      }
    });
    final prefs = await SharedPreferences.getInstance();
    await prefs.setStringList('fav_ids', _favs.toList());
  }

  Future<void> _setGrid(bool v) async {
    setState(() => _grid = v);
    final prefs = await SharedPreferences.getInstance();
    await prefs.setBool('grid_mode', v);
  }

  List<ShowItem> get _visible {
    final cat = _catalog;
    if (cat == null) return const [];
    var list = cat.items;
    if (_category == 'Favourites') {
      list = list.where((i) => _favs.contains(i.id)).toList();
    } else if (_category != 'All') {
      list = list.where((i) => i.category == _category).toList();
    }
    final q = _query.trim().toLowerCase();
    if (q.isNotEmpty) {
      list = list.where((i) {
        final blob =
            '${i.name} ${i.tagline} ${i.category} ${i.tags.join(' ')} ${i.url}'
                .toLowerCase();
        return blob.contains(q);
      }).toList();
    }
    list = [...list]..sort((a, b) {
        final af = _favs.contains(a.id) ? 0 : 1;
        final bf = _favs.contains(b.id) ? 0 : 1;
        if (af != bf) return af - bf;
        return a.name.compareTo(b.name);
      });
    return list;
  }

  void _toast(String msg) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(msg),
        behavior: SnackBarBehavior.floating,
        backgroundColor: MixShowTheme.panel,
      ),
    );
  }

  Future<void> _onOpen(ShowItem item) async {
    final ok = await openProject(item);
    if (!ok) _toast('Could not open link');
  }

  Future<void> _onSms(ShowItem item) async {
    final ok = await smsShare(item);
    if (!ok) {
      await systemShare(item);
      _toast('Opened share sheet (SMS not available)');
    }
  }

  void _showDetail(ShowItem item) {
    showModalBottomSheet<void>(
      context: context,
      backgroundColor: MixShowTheme.panel,
      isScrollControlled: true,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(18)),
      ),
      builder: (ctx) {
        final fav = _favs.contains(item.id);
        return SafeArea(
          child: Padding(
            padding: const EdgeInsets.fromLTRB(20, 16, 20, 20),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Center(
                  child: Container(
                    width: 40,
                    height: 4,
                    decoration: BoxDecoration(
                      color: MixShowTheme.line,
                      borderRadius: BorderRadius.circular(2),
                    ),
                  ),
                ),
                const SizedBox(height: 14),
                ClipRRect(
                  borderRadius: BorderRadius.circular(12),
                  child: AspectRatio(
                    aspectRatio: 16 / 10,
                    child: _Thumb(item: item, fit: BoxFit.cover),
                  ),
                ),
                const SizedBox(height: 14),
                Text(
                  item.name,
                  style: const TextStyle(
                    fontSize: 22,
                    fontWeight: FontWeight.w700,
                    color: MixShowTheme.cream,
                  ),
                ),
                const SizedBox(height: 6),
                Text(
                  item.tagline,
                  style: const TextStyle(color: MixShowTheme.muted, fontSize: 15),
                ),
                const SizedBox(height: 8),
                Text(
                  item.url,
                  style: const TextStyle(color: MixShowTheme.ochre, fontSize: 12),
                ),
                const SizedBox(height: 16),
                _ActionButton(
                  icon: Icons.open_in_browser,
                  label: 'Open project',
                  primary: true,
                  onTap: () {
                    Navigator.pop(ctx);
                    _onOpen(item);
                  },
                ),
                const SizedBox(height: 10),
                _ActionButton(
                  icon: Icons.sms_outlined,
                  label: 'Send link via SMS',
                  onTap: () {
                    Navigator.pop(ctx);
                    _onSms(item);
                  },
                ),
                const SizedBox(height: 10),
                _ActionButton(
                  icon: Icons.ios_share,
                  label: 'Share…',
                  onTap: () {
                    Navigator.pop(ctx);
                    systemShare(item);
                  },
                ),
                const SizedBox(height: 10),
                _ActionButton(
                  icon: Icons.link,
                  label: 'Copy link',
                  onTap: () async {
                    await copyLink(item);
                    if (ctx.mounted) Navigator.pop(ctx);
                    _toast('Link copied');
                  },
                ),
                const SizedBox(height: 10),
                _ActionButton(
                  icon: fav ? Icons.star : Icons.star_border,
                  label: fav ? 'Remove favourite' : 'Favourite',
                  onTap: () {
                    _toggleFav(item.id);
                    Navigator.pop(ctx);
                  },
                ),
              ],
            ),
          ),
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    final cat = _catalog;
    final cats = <String>['All', 'Favourites', ...?cat?.categories];
    final visible = _visible;

    return Scaffold(
      body: SafeArea(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 12, 12, 6),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Text(
                          'MiX Showroom',
                          style: TextStyle(
                            fontSize: 26,
                            fontWeight: FontWeight.w800,
                            color: MixShowTheme.cream,
                            letterSpacing: -0.5,
                          ),
                        ),
                        const SizedBox(height: 2),
                        Text(
                          cat == null
                              ? 'Loading portfolio…'
                              : '${cat.items.length} projects · open · SMS · share',
                          style: const TextStyle(
                            color: MixShowTheme.muted,
                            fontSize: 13,
                          ),
                        ),
                      ],
                    ),
                  ),
                  IconButton(
                    tooltip: _grid ? 'List view' : 'Grid view',
                    onPressed: () => _setGrid(!_grid),
                    icon: Icon(
                      _grid ? Icons.view_list : Icons.grid_view,
                      color: MixShowTheme.cream,
                    ),
                  ),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              child: TextField(
                style: const TextStyle(color: MixShowTheme.cream),
                decoration: const InputDecoration(
                  hintText: 'Search projects, games, demos…',
                  prefixIcon: Icon(Icons.search, color: MixShowTheme.muted),
                  isDense: true,
                ),
                onChanged: (v) => setState(() => _query = v),
              ),
            ),
            const SizedBox(height: 8),
            SizedBox(
              height: 42,
              child: ListView.separated(
                scrollDirection: Axis.horizontal,
                padding: const EdgeInsets.symmetric(horizontal: 14),
                itemCount: cats.length,
                separatorBuilder: (_, __) => const SizedBox(width: 8),
                itemBuilder: (_, i) {
                  final c = cats[i];
                  final selected = c == _category;
                  return FilterChip(
                    label: Text(c),
                    selected: selected,
                    onSelected: (_) => setState(() => _category = c),
                    showCheckmark: false,
                  );
                },
              ),
            ),
            const SizedBox(height: 6),
            Expanded(
              child: _error != null
                  ? Center(
                      child: Text(
                        'Could not load catalog\n$_error',
                        textAlign: TextAlign.center,
                        style: const TextStyle(color: MixShowTheme.muted),
                      ),
                    )
                  : cat == null
                      ? const Center(child: CircularProgressIndicator())
                      : visible.isEmpty
                          ? const Center(
                              child: Text(
                                'No projects match',
                                style: TextStyle(color: MixShowTheme.muted),
                              ),
                            )
                          : _grid
                              ? GridView.builder(
                                  padding: const EdgeInsets.fromLTRB(12, 4, 12, 20),
                                  gridDelegate:
                                      const SliverGridDelegateWithFixedCrossAxisCount(
                                    crossAxisCount: 2,
                                    mainAxisSpacing: 10,
                                    crossAxisSpacing: 10,
                                    childAspectRatio: 0.92,
                                  ),
                                  itemCount: visible.length,
                                  itemBuilder: (context, index) {
                                    final item = visible[index];
                                    return _ProjectCard(
                                      item: item,
                                      fav: _favs.contains(item.id),
                                      onTap: () => _showDetail(item),
                                      onOpen: () => _onOpen(item),
                                      onSms: () => _onSms(item),
                                    );
                                  },
                                )
                              : ListView.builder(
                                  padding: const EdgeInsets.fromLTRB(12, 4, 12, 20),
                                  itemCount: visible.length,
                                  itemBuilder: (context, index) {
                                    final item = visible[index];
                                    return Padding(
                                      padding: const EdgeInsets.only(bottom: 8),
                                      child: _ProjectListTile(
                                        item: item,
                                        fav: _favs.contains(item.id),
                                        onTap: () => _showDetail(item),
                                        onOpen: () => _onOpen(item),
                                        onSms: () => _onSms(item),
                                      ),
                                    );
                                  },
                                ),
            ),
          ],
        ),
      ),
    );
  }
}

class _Thumb extends StatelessWidget {
  const _Thumb({required this.item, this.fit = BoxFit.cover});

  final ShowItem item;
  final BoxFit fit;

  @override
  Widget build(BuildContext context) {
    final asset = item.thumb;
    if (asset != null && asset.isNotEmpty) {
      return Image.asset(
        asset,
        fit: fit,
        errorBuilder: (_, __, ___) => _fallback(),
      );
    }
    return _fallback();
  }

  Widget _fallback() {
    return Container(
      color: MixShowTheme.card,
      alignment: Alignment.center,
      child: Text(
        item.name.isNotEmpty ? item.name[0].toUpperCase() : 'M',
        style: const TextStyle(
          fontSize: 36,
          fontWeight: FontWeight.w800,
          color: MixShowTheme.ochre,
        ),
      ),
    );
  }
}

class _ProjectCard extends StatelessWidget {
  const _ProjectCard({
    required this.item,
    required this.fav,
    required this.onTap,
    required this.onOpen,
    required this.onSms,
  });

  final ShowItem item;
  final bool fav;
  final VoidCallback onTap;
  final VoidCallback onOpen;
  final VoidCallback onSms;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: MixShowTheme.card,
      borderRadius: BorderRadius.circular(14),
      child: InkWell(
        borderRadius: BorderRadius.circular(14),
        onTap: onTap,
        onLongPress: onOpen,
        child: Container(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(14),
            border: Border.all(
              color: fav ? MixShowTheme.ochre : MixShowTheme.line,
              width: fav ? 1.5 : 1,
            ),
          ),
          clipBehavior: Clip.antiAlias,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Expanded(
                flex: 5,
                child: Stack(
                  fit: StackFit.expand,
                  children: [
                    _Thumb(item: item),
                    Positioned(
                      left: 8,
                      top: 8,
                      child: Container(
                        padding: const EdgeInsets.symmetric(
                          horizontal: 7,
                          vertical: 3,
                        ),
                        decoration: BoxDecoration(
                          color: Colors.black54,
                          borderRadius: BorderRadius.circular(8),
                        ),
                        child: Text(
                          item.category,
                          style: const TextStyle(
                            fontSize: 10,
                            fontWeight: FontWeight.w700,
                            color: MixShowTheme.cream,
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              Expanded(
                flex: 4,
                child: Padding(
                  padding: const EdgeInsets.fromLTRB(10, 8, 6, 6),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        item.name,
                        maxLines: 2,
                        overflow: TextOverflow.ellipsis,
                        style: const TextStyle(
                          fontSize: 13,
                          fontWeight: FontWeight.w700,
                          color: MixShowTheme.cream,
                          height: 1.2,
                        ),
                      ),
                      const SizedBox(height: 3),
                      Expanded(
                        child: Text(
                          item.tagline,
                          maxLines: 2,
                          overflow: TextOverflow.ellipsis,
                          style: const TextStyle(
                            fontSize: 11,
                            color: MixShowTheme.muted,
                            height: 1.25,
                          ),
                        ),
                      ),
                      Row(
                        children: [
                          IconButton(
                            visualDensity: VisualDensity.compact,
                            padding: EdgeInsets.zero,
                            constraints: const BoxConstraints(
                              minWidth: 32,
                              minHeight: 32,
                            ),
                            tooltip: 'SMS',
                            icon: const Icon(
                              Icons.sms_outlined,
                              size: 18,
                              color: MixShowTheme.ochre,
                            ),
                            onPressed: onSms,
                          ),
                          IconButton(
                            visualDensity: VisualDensity.compact,
                            padding: EdgeInsets.zero,
                            constraints: const BoxConstraints(
                              minWidth: 32,
                              minHeight: 32,
                            ),
                            tooltip: 'Open',
                            icon: const Icon(
                              Icons.open_in_new,
                              size: 18,
                              color: MixShowTheme.cream,
                            ),
                            onPressed: onOpen,
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _ProjectListTile extends StatelessWidget {
  const _ProjectListTile({
    required this.item,
    required this.fav,
    required this.onTap,
    required this.onOpen,
    required this.onSms,
  });

  final ShowItem item;
  final bool fav;
  final VoidCallback onTap;
  final VoidCallback onOpen;
  final VoidCallback onSms;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: MixShowTheme.card,
      borderRadius: BorderRadius.circular(12),
      child: InkWell(
        borderRadius: BorderRadius.circular(12),
        onTap: onTap,
        child: Container(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(12),
            border: Border.all(
              color: fav ? MixShowTheme.ochre : MixShowTheme.line,
            ),
          ),
          padding: const EdgeInsets.all(8),
          child: Row(
            children: [
              ClipRRect(
                borderRadius: BorderRadius.circular(8),
                child: SizedBox(
                  width: 88,
                  height: 56,
                  child: _Thumb(item: item),
                ),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      item.name,
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: const TextStyle(
                        fontWeight: FontWeight.w700,
                        color: MixShowTheme.cream,
                      ),
                    ),
                    Text(
                      item.tagline,
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: const TextStyle(
                        fontSize: 12,
                        color: MixShowTheme.muted,
                      ),
                    ),
                    Text(
                      item.category,
                      style: const TextStyle(
                        fontSize: 11,
                        color: MixShowTheme.sage,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ],
                ),
              ),
              IconButton(
                icon: const Icon(Icons.sms_outlined, color: MixShowTheme.ochre),
                onPressed: onSms,
              ),
              IconButton(
                icon: const Icon(Icons.open_in_new, color: MixShowTheme.cream),
                onPressed: onOpen,
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _ActionButton extends StatelessWidget {
  const _ActionButton({
    required this.icon,
    required this.label,
    required this.onTap,
    this.primary = false,
  });

  final IconData icon;
  final String label;
  final VoidCallback onTap;
  final bool primary;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: primary ? MixShowTheme.ochre : MixShowTheme.card,
      borderRadius: BorderRadius.circular(12),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(12),
        child: Container(
          padding: const EdgeInsets.symmetric(vertical: 14, horizontal: 14),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(12),
            border: Border.all(
              color: primary ? MixShowTheme.ochre : MixShowTheme.line,
            ),
          ),
          child: Row(
            children: [
              Icon(
                icon,
                color: primary ? MixShowTheme.forest : MixShowTheme.cream,
              ),
              const SizedBox(width: 12),
              Text(
                label,
                style: TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.w600,
                  color: primary ? MixShowTheme.forest : MixShowTheme.cream,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
