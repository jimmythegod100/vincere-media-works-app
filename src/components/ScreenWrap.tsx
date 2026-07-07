import { ReactNode } from 'react';
import { Platform, ScrollView, StyleSheet, View, ViewStyle } from 'react-native';
import { colors, spacing } from '../theme';

type Props = {
  children: ReactNode;
  contentStyle?: ViewStyle;
};

export function ScreenWrap({ children, contentStyle }: Props) {
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={[styles.content, contentStyle]}>
      <View style={styles.inner}>{children}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1, backgroundColor: colors.bg },
  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xl * 2,
    alignItems: Platform.OS === 'web' ? 'center' : 'stretch',
  },
  inner: {
    width: '100%',
    maxWidth: Platform.OS === 'web' ? 520 : undefined,
  },
});
