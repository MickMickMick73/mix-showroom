import 'package:flutter/services.dart';
import 'package:share_plus/share_plus.dart';
import 'package:url_launcher/url_launcher.dart';

import 'catalog.dart';

Future<bool> openProject(ShowItem item) async {
  final uri = Uri.parse(item.url);
  return launchUrl(uri, mode: LaunchMode.externalApplication);
}

/// Opens the system Messages app with body prefilled (iOS/Android).
Future<bool> smsShare(ShowItem item, {String? phone}) async {
  final body = Uri.encodeComponent(item.smsBody);
  final path = (phone != null && phone.trim().isNotEmpty)
      ? phone.trim()
      : '';
  // iOS prefers &body= ; Android often uses ?body=
  final uri = Uri.parse('sms:$path?body=$body');
  if (await canLaunchUrl(uri)) {
    return launchUrl(uri);
  }
  final uri2 = Uri.parse('sms:$path&body=$body');
  return launchUrl(uri2);
}

Future<void> systemShare(ShowItem item) async {
  await SharePlus.instance.share(
    ShareParams(text: item.smsBody, subject: item.name),
  );
}

Future<void> copyLink(ShowItem item) async {
  await Clipboard.setData(ClipboardData(text: item.url));
}
