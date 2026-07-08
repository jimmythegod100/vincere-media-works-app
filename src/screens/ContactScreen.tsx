import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import InquiryForm from '../components/InquiryForm';
import { ScreenWrap } from '../components/ScreenWrap';
import { BUSINESS, FAQ } from '../data';
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
    <ScreenWrap>
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
      <ContactRow
        icon="briefcase"
        label="Fiverr"
        value="vinceremedia_"
        onPress={() => WebBrowser.openBrowserAsync(BUSINESS.fiverr)}
      />

      <InquiryForm />

      <Text style={styles.faqTitle}>FAQ</Text>
      {FAQ.map((item) => (
        <View key={item.q} style={styles.faqCard}>
          <Text style={styles.faqQ}>{item.q}</Text>
          <Text style={styles.faqA}>{item.a}</Text>
        </View>
      ))}
    </ScreenWrap>
  );
}

const styles = StyleSheet.create({
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
  faqTitle: { color: colors.text, fontSize: 18, fontWeight: '800', marginTop: spacing.xl, marginBottom: spacing.sm },
  faqCard: {
    backgroundColor: colors.bgCard,
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  faqQ: { color: colors.text, fontWeight: '700', marginBottom: 4 },
  faqA: { color: colors.textMuted, fontSize: 14, lineHeight: 20 },
});
