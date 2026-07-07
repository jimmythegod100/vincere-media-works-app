import { Image, Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BUSINESS, PRICING, SERVICES } from '../data';
import { colors, spacing } from '../theme';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.hero}>
        <Image source={require('../../assets/logo-hero.png')} style={styles.heroLogo} resizeMode="contain" />
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
            <Ionicons name={service.icon} size={24} color={colors.red} />
            <Text style={styles.serviceTitle}>{service.title}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Starting packages</Text>
      {PRICING.map((tier) => (
        <View key={tier.id} style={[styles.priceCard, tier.featured && styles.priceFeatured]}>
          {tier.featured ? <Text style={styles.priceBadge}>Most popular</Text> : null}
          <View style={styles.priceRow}>
            <Text style={styles.priceName}>{tier.name}</Text>
            <Text style={styles.priceAmount}>{tier.price}</Text>
          </View>
          <Text style={styles.priceDesc}>{tier.description}</Text>
        </View>
      ))}

      <Pressable style={styles.linkBtn} onPress={() => Linking.openURL(BUSINESS.website)}>
        <Ionicons name="globe-outline" size={18} color={colors.red} />
        <Text style={styles.linkText}>Visit our website</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  content: { padding: spacing.lg, paddingBottom: spacing.xl * 2 },
  hero: { alignItems: 'center', marginBottom: spacing.xl },
  heroLogo: { width: '100%', height: 180, marginBottom: spacing.md },
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
    fontSize: 22,
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
  serviceTitle: { color: colors.text, fontWeight: '600', fontSize: 14 },
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
  priceDesc: { color: colors.textMuted, marginTop: 4, fontSize: 14 },
  linkBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: spacing.lg },
  linkText: { color: colors.red, fontWeight: '600' },
});
