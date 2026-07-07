import { Ionicons } from '@expo/vector-icons';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme';

const EMOJI: Record<string, string> = {
  videocam: '🎬',
  diamond: '✦',
  'phone-portrait': '📱',
  camera: '📷',
  globe: '🌐',
  flash: '⚡',
  home: '🏠',
  grid: '▦',
  images: '🖼',
  mail: '✉',
};

type IconName = keyof typeof Ionicons.glyphMap;

export function ServiceIcon({ name, size = 24 }: { name: IconName; size?: number }) {
  if (Platform.OS === 'web') {
    return <Text style={[styles.emoji, { fontSize: size * 0.9 }]}>{EMOJI[name] ?? '▸'}</Text>;
  }
  return <Ionicons name={name} size={size} color={colors.red} />;
}

export function TabIcon({ name, size = 22, color }: { name: IconName; size?: number; color: string }) {
  if (Platform.OS === 'web') {
    return <Text style={{ fontSize: size * 0.85, color }}>{EMOJI[name] ?? '•'}</Text>;
  }
  return <Ionicons name={name} size={size} color={color} />;
}

const styles = StyleSheet.create({
  emoji: { lineHeight: 28 },
});
