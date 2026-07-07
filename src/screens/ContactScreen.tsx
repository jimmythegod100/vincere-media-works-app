import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { BUSINESS } from '../data';
import { colors, spacing } from '../theme';

function ContactRow({
  icon,
  label,
  value,
  onPress,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.row} onPress={onPress}>
      <View style={styles.rowIcon}>
        <Ionicons name={icon} size={22} color={colors.red} />
      </View>
      <View style={styles.rowText}>
        <Text style={styles.rowLabel}>{label}</Text>
        <Text style={styles.rowValue}>{value}</Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
    </Pressable>
  );
}

export default function ContactScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.header}>Start your project</Text>
      <Text style={styles.sub}>
        Tell us about your vision. We respond within 24–48 hours with a custom quote and timeline.
      </Text>

      <ContactRow
        icon="mail"
        label="Email"
        value={BUSINESS.email}
        onPress={() => Linking.openURL(`mailto:${BUSINESS.email}?subject=Project%20inquiry%20—%20Vincere%20Media%20Works`)}
      />
      <ContactRow
        icon="globe"
        label="Website"
        value="vincere-media-works-web"
        onPress={() => WebBrowser.openBrowserAsync(BUSINESS.website)}
      />
      <ContactRow
        icon="logo-instagram"
        label="Instagram"
        value="@vinceremediaworks"
        onPress={() => WebBrowser.openBrowserAsync(BUSINESS.instagram)}
      />

      <View style={styles.note}>
        <Text style={styles.noteTitle}>What to include</Text>
        <Text style={styles.noteItem}>• Project type (video, logo, social, web)</Text>
        <Text style={styles.noteItem}>• Timeline and budget range</Text>
        <Text style={styles.noteItem}>• Links to reference material</Text>
      </View>

      <Pressable
        style={styles.cta}
        onPress={() => Linking.openURL(`mailto:${BUSINESS.email}?subject=Project%20inquiry&body=Project%20type%3A%0ATimeline%3A%0ABudget%3A%0ADetails%3A%0A`)}
      >
        <Text style={styles.ctaText}>Send inquiry</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  content: { padding: spacing.lg, paddingBottom: spacing.xl * 2 },
  header: { color: colors.text, fontSize: 24, fontWeight: '800', marginBottom: spacing.sm },
  sub: { color: colors.textMuted, marginBottom: spacing.lg, lineHeight: 22 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.bgCard,
    borderRadius: 14,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing.sm,
  },
  rowIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: 'rgba(220,38,38,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowText: { flex: 1 },
  rowLabel: { color: colors.textMuted, fontSize: 12, marginBottom: 2 },
  rowValue: { color: colors.text, fontWeight: '600', fontSize: 14 },
  note: {
    backgroundColor: colors.bgCard,
    borderRadius: 14,
    padding: spacing.lg,
    marginTop: spacing.md,
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  noteTitle: { color: colors.text, fontWeight: '700', marginBottom: spacing.sm },
  noteItem: { color: colors.textMuted, lineHeight: 24 },
  cta: {
    backgroundColor: colors.red,
    borderRadius: 999,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },
  ctaText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});
