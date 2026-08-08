import 'package:flutter/material.dart';

/// Dark showroom — no big white screens.
class MixShowTheme {
  static const forest = Color(0xFF0F1F18);
  static const panel = Color(0xFF162820);
  static const card = Color(0xFF1C3228);
  static const line = Color(0xFF2E4A3C);
  static const cream = Color(0xFFE8E0D0);
  static const muted = Color(0xFF9BB0A4);
  static const ochre = Color(0xFFD4A84B);
  static const sage = Color(0xFF5C9B78);

  static ThemeData dark() {
    final base = ThemeData(
      useMaterial3: true,
      brightness: Brightness.dark,
      scaffoldBackgroundColor: forest,
      colorScheme: const ColorScheme.dark(
        primary: ochre,
        secondary: sage,
        surface: panel,
        onPrimary: forest,
        onSecondary: cream,
        onSurface: cream,
      ),
      appBarTheme: const AppBarTheme(
        backgroundColor: panel,
        foregroundColor: cream,
        elevation: 0,
        centerTitle: false,
      ),
      cardTheme: CardThemeData(
        color: card,
        elevation: 0,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(14),
          side: const BorderSide(color: line),
        ),
      ),
      chipTheme: ChipThemeData(
        backgroundColor: panel,
        selectedColor: sage.withValues(alpha: 0.35),
        labelStyle: const TextStyle(color: cream, fontSize: 13),
        side: const BorderSide(color: line),
        padding: const EdgeInsets.symmetric(horizontal: 8),
      ),
      inputDecorationTheme: InputDecorationTheme(
        filled: true,
        fillColor: panel,
        hintStyle: const TextStyle(color: muted),
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: const BorderSide(color: line),
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: const BorderSide(color: line),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: const BorderSide(color: ochre, width: 1.4),
        ),
      ),
      floatingActionButtonTheme: const FloatingActionButtonThemeData(
        backgroundColor: ochre,
        foregroundColor: forest,
      ),
    );
    return base;
  }
}
