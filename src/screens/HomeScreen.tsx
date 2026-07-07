import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScreenWrap } from '../components/ScreenWrap';
import { ServiceIcon } from '../components/ServiceIcon';
import { BUSINESS, PRICING, PROCESS, SERVICES } from '../data';
import { colors, spacing } from '../theme';

export default function HomeScreen() {
  return (
    <ScreenWrap>
      <View style={styles.hero}>
        <View style={styles.logoFrame}>
          <View style={styles.logoInner}>
            <Text style={styles.logoText}>VINCERE</Text>
            <Text style={styles.logoSub}>MEDIA WORKS</Text>
          </View>
        </View>
        <Text style={styles.tagline}>{BUSINESS.tagline}</Text>
        <Text style={styles.heroText}>
          Video, branding, social content, and websites for businesses and creators who refuse to blend in.
        </Text>
        <Pressable style={styles.cta} onPress={() => Linking.openURL(`mailto:${BUSINESS.email}?subject=Project%20inquiry`)}>
          <Text style={styles.ctaText}>Get a Free Quote</Text>
          <Ionicons name="arrow-forward" size={18} color="#fff" />
        </Pressable>
      </View>

      <Text style={styles.sectionTitle}>What we do</Text>
      <View style={styles.grid}>
        {SERVICES.slice(0, 4).map((service) => (
          <View key={service.id} style={styles.serviceCard}>
            <ServiceIcon name={service.icon} size={24} />
            <Text style={styles.serviceTitle}>{service.title}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>How it works</Text>
      {PROCESS.map((item) => (
        <View key={item.step} style={styles.processRow}>
          <Text style={styles.processStep}>{item.step}</Text>
          <View style={styles.processBody}>
            <Text style={styles.processTitle}>{item.title}</Text>
            <Text style={styles.processDetail}>{item.detail}</Text>
          </View>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Starting packages</Text>
      {PRICING.map((tier) => (
        <View key={tier.id} style={[styles.priceCard, tier.featured && styles.priceFeatured]}>
          {tier.featured ? <Text style={styles.priceBadge}>Most popular</Text> : null}
          <View style={styles.priceRow}>
            <Text style={styles.priceName}>{tier.name}</Text>
            <Text style={styles.priceAmount}>{tier.price}</Text>
          </View>
          <Text style={styles.priceDesc}>{tier.description}</Text>
          {tier.features.map((f) => (
            <Text key={f} style={styles.priceFeature}>▸ {f}</Text>
          ))}
        </View>
      ))}

      <Pressable style={styles.linkBtn} onPress={() => Linking.openURL(BUSINESS.website)}>
        <Ionicons name="globe-outline" size={18} color={colors.red} />
        <Text style={styles.linkText}>Visit our website</Text>
      </Pressable>
    </ScreenWrap>
  );
}

const styles = StyleSheet.create({
  hero: { alignItems: 'center', marginBottom: spacing.xl },
  logoFrame: {
    width: '100%',
    backgroundColor: colors.bgCard,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    marginBottom: spacing.md,
    alignItems: 'center',
  },
  logoInner: { alignItems: 'center' },
  logoText: { color: colors.text, fontSize: 32, fontWeight: '900', letterSpacing: 4 },
  logoSub: { color: colors.red, fontSize: 14, fontWeight: '700', letterSpacing: 6, marginTop: 4 },
  tagline: { color: colors.red, fontSize: 18, fontWeight: '700', letterSpacing: 1, marginBottom: spacing.sm },
  heroText: { color: colors.textMuted, textAlign: 'center', lineHeight: 22, marginBottom: spacing.lg },
  cta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.red,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: 999,
  },
  ctaText: { color: '#fff', fontWeight: '700', fontSize: 16 },
  sectionTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '800',
    marginBottom: spacing.md,
    letterSpacing: 0.5,
  },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm, marginBottom: spacing.xl },
  serviceCard: {
    width: '48%',
    backgroundColor: colors.bgCard,
    borderRadius: 14,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing.sm,
  },
  serviceTitle: { color: colors.text, fontWeight: '600', fontSize: 13, lineHeight: 18 },
  processRow: {
    flexDirection: 'row',
    gap: spacing.md,
    marginBottom: spacing.sm,
    backgroundColor: colors.bgCard,
    borderRadius: 12,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  processStep: { color: colors.red, fontWeight: '900', fontSize: 18, width: 32 },
  processBody: { flex: 1 },
  processTitle: { color: colors.text, fontWeight: '700', marginBottom: 2 },
  processDetail: { color: colors.textMuted, fontSize: 13, lineHeight: 18 },
  priceCard: {
    backgroundColor: colors.bgCard,
    borderRadius: 14,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  priceFeatured: { borderColor: colors.red, backgroundColor: '#1a0f0f' },
  priceBadge: { color: colors.red, fontSize: 11, fontWeight: '700', letterSpacing: 1, marginBottom: 4, textTransform: 'uppercase' },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  priceName: { color: colors.text, fontSize: 18, fontWeight: '700' },
  priceAmount: { color: colors.red, fontSize: 22, fontWeight: '800' },
  priceDesc: { color: colors.textMuted, marginTop: 4, marginBottom: spacing.sm, fontSize: 14 },
  priceFeature: { color: colors.textMuted, fontSize: 13, lineHeight: 22 },
  linkBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: spacing.lg },
  linkText: { color: colors.red, fontWeight: '600' },
});
