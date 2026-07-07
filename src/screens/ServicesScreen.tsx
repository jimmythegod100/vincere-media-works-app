import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SERVICES } from '../data';
import { colors, spacing } from '../theme';

export default function ServicesScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.header}>Services built to conquer your market</Text>
      <Text style={styles.sub}>Full-stack media production — video, design, and digital presence.</Text>
      {SERVICES.map((service) => (
        <View key={service.id} style={styles.card}>
          <View style={styles.iconWrap}>
            <Ionicons name={service.icon} size={26} color={colors.red} />
          </View>
          <Text style={styles.title}>{service.title}</Text>
          <Text style={styles.desc}>{service.description}</Text>
          {service.items.map((item) => (
            <View key={item} style={styles.itemRow}>
              <Text style={styles.bullet}>▸</Text>
              <Text style={styles.item}>{item}</Text>
            </View>
          ))}
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
    padding: spacing.lg,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  iconWrap: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: 'rgba(220,38,38,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  title: { color: colors.text, fontSize: 18, fontWeight: '700', marginBottom: spacing.xs },
  desc: { color: colors.textMuted, lineHeight: 21, marginBottom: spacing.sm },
  itemRow: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingVertical: 3 },
  bullet: { color: colors.red, fontWeight: '700' },
  item: { color: colors.textMuted, fontSize: 14, flex: 1 },
});
