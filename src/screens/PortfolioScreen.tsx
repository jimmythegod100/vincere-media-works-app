import { Image, Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { ScreenWrap } from '../components/ScreenWrap';
import { BUSINESS, PORTFOLIO, PORTFOLIO_IMAGES } from '../data';
import { colors, spacing } from '../theme';

export default function PortfolioScreen() {
  return (
    <ScreenWrap>
      <Text style={styles.header}>Portfolio styles</Text>
      <Text style={styles.sub}>
        Example visual directions we create. Your project gets a custom look matched to your brand.
      </Text>
      {PORTFOLIO.map((item) => (
        <View key={item.id} style={styles.card}>
          <View style={styles.thumb}>
            <Image source={PORTFOLIO_IMAGES[item.imageKey]} style={styles.thumbImg} resizeMode="cover" />
          </View>
          <View style={styles.body}>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.description}</Text>
          </View>
        </View>
      ))}
      <Pressable style={styles.fiverrBtn} onPress={() => Linking.openURL(BUSINESS.fiverrPortfolio)}>
        <Text style={styles.fiverrBtnText}>View full portfolio on Fiverr</Text>
      </Pressable>
      <View style={styles.disclaimer}>
        <Text style={styles.disclaimerText}>
          Style concepts only — not fake client case studies. Every project is custom-built for you.
        </Text>
      </View>
    </ScreenWrap>
  );
}

const styles = StyleSheet.create({
  header: { color: colors.text, fontSize: 22, fontWeight: '800', marginBottom: spacing.sm },
  sub: { color: colors.textMuted, marginBottom: spacing.lg, lineHeight: 22 },
  card: {
    backgroundColor: colors.bgCard,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  thumb: {
    height: 180,
    backgroundColor: colors.bgElevated,
  },
  thumbImg: { width: '100%', height: '100%' },
  body: { padding: spacing.lg },
  label: {
    color: colors.red,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  title: { color: colors.text, fontSize: 18, fontWeight: '700', marginBottom: spacing.xs },
  desc: { color: colors.textMuted, lineHeight: 21 },
  fiverrBtn: {
    backgroundColor: colors.red,
    borderRadius: 999,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  fiverrBtnText: { color: '#fff', fontWeight: '700', fontSize: 15 },
  disclaimer: {
    backgroundColor: 'rgba(220,38,38,0.08)',
    borderRadius: 12,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: 'rgba(220,38,38,0.25)',
  },
  disclaimerText: { color: colors.textMuted, fontSize: 13, lineHeight: 20, textAlign: 'center' },
});
