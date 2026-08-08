import 'dart:convert';

import 'package:flutter/services.dart';

class ShowItem {
  ShowItem({
    required this.id,
    required this.name,
    required this.tagline,
    required this.category,
    required this.url,
    this.shareNote,
    this.thumb,
    this.tags = const [],
  });

  final String id;
  final String name;
  final String tagline;
  final String category;
  final String url;
  final String? shareNote;
  final String? thumb;
  final List<String> tags;

  factory ShowItem.fromJson(Map<String, dynamic> j) {
    return ShowItem(
      id: j['id'] as String? ?? '',
      name: j['name'] as String? ?? 'Untitled',
      tagline: j['tagline'] as String? ?? '',
      category: j['category'] as String? ?? 'Other',
      url: j['url'] as String? ?? '',
      shareNote: j['shareNote'] as String?,
      thumb: j['thumb'] as String?,
      tags: (j['tags'] as List?)?.map((e) => e.toString()).toList() ?? const [],
    );
  }

  String get smsBody {
    final note = (shareNote != null && shareNote!.trim().isNotEmpty)
        ? shareNote!.trim()
        : name;
    return '$note\n$url';
  }
}

class Catalog {
  Catalog({required this.title, required this.items, this.updated});

  final String title;
  final String? updated;
  final List<ShowItem> items;

  List<String> get categories {
    final set = <String>{};
    for (final i in items) {
      set.add(i.category);
    }
    final list = set.toList()..sort();
    return list;
  }

  static Future<Catalog> loadAsset() async {
    final raw = await rootBundle.loadString('assets/catalog.json');
    final j = jsonDecode(raw) as Map<String, dynamic>;
    final list = (j['items'] as List? ?? [])
        .map((e) => ShowItem.fromJson(Map<String, dynamic>.from(e as Map)))
        .where((e) => e.url.isNotEmpty)
        .toList();
    return Catalog(
      title: j['title'] as String? ?? 'MiX Showroom',
      updated: j['updated'] as String?,
      items: list,
    );
  }
}
