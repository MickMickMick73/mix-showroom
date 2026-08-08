import "package:flutter_test/flutter_test.dart";
import "package:mix_showroom/main.dart";

void main() {
  testWidgets("showroom loads title", (tester) async {
    await tester.pumpWidget(const MixShowroomApp());
    await tester.pumpAndSettle();
    expect(find.text("MiX Showroom"), findsOneWidget);
  });
}
