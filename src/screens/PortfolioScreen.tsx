import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { PORTFOLIO } from '../data';
import { colors, spacing } from '../theme';

export default function PortfolioScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.header}>Portfolio styles</Text>
      <Text style={styles.sub}>
        Example visual directions we create. Your project gets a custom look matched to your brand.
      </Text>
      {PORTFOLIO.map((item) => (
        <View key={item.id} style={styles.card}>
          <View style={styles.thumb}>
            <Image source={require('../../assets/icon.png')} style={styles.thumbImg} resizeMode="contain" />
          </View>
          <View style={styles.body}>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  content: { padding: spacing.lg, paddingBottom: spacing.xl * 2 },
  header: { color: colors.text, fontSize: 24, fontWeight: '800', marginBottom: spacing.sm },
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
    height: 140,
    backgroundColor: colors.bgElevated,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbImg: { width: 80, height: 80 },
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
});
