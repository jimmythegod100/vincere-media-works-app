import { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { BUSINESS, SERVICES } from '../data';
import { colors, spacing } from '../theme';

export default function InquiryForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit() {
    if (!name.trim() || !email.trim() || !message.trim()) {
      Alert.alert('Missing info', 'Please fill in name, email, and project details.');
      return;
    }

    setSending(true);
    const payload = {
      name: name.trim(),
      email: email.trim(),
      service: service || 'Not specified',
      message: message.trim(),
      _subject: 'App inquiry — Vincere Media Works',
      _captcha: 'false',
    };

    try {
      if (Platform.OS === 'web') {
        const res = await fetch(`https://formsubmit.co/ajax/${BUSINESS.email}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error('Send failed');
      } else {
        const body = encodeURIComponent(
          `Name: ${payload.name}\nEmail: ${payload.email}\nService: ${payload.service}\n\n${payload.message}`
        );
        await import('expo-linking').then(({ default: Linking }) =>
          Linking.openURL(`mailto:${BUSINESS.email}?subject=${encodeURIComponent(payload._subject)}&body=${body}`)
        );
      }
      setSent(true);
      setName('');
      setEmail('');
      setService('');
      setMessage('');
    } catch {
      Alert.alert('Could not send', 'Try emailing us directly from the links above.');
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <View style={styles.success}>
        <Text style={styles.successTitle}>Message sent!</Text>
        <Text style={styles.successText}>We will reply within 24–48 hours.</Text>
        <Pressable onPress={() => setSent(false)}>
          <Text style={styles.successLink}>Send another</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.form}>
      <Text style={styles.formTitle}>Quick inquiry</Text>
      <TextInput
        style={styles.input}
        placeholder="Your name"
        placeholderTextColor={colors.textMuted}
        value={name}
        onChangeText={setName}
        autoComplete="name"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={colors.textMuted}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
      />
      <TextInput
        style={styles.input}
        placeholder="Service (e.g. video, logo, web)"
        placeholderTextColor={colors.textMuted}
        value={service}
        onChangeText={setService}
      />
      <TextInput
        style={[styles.input, styles.textarea]}
        placeholder="Project details, timeline, budget…"
        placeholderTextColor={colors.textMuted}
        value={message}
        onChangeText={setMessage}
        multiline
        numberOfLines={4}
      />
      <Pressable style={[styles.submit, sending && styles.submitDisabled]} onPress={handleSubmit} disabled={sending}>
        {sending ? <ActivityIndicator color="#fff" /> : <Text style={styles.submitText}>Send inquiry</Text>}
      </Pressable>
      <Text style={styles.hint}>Services: {SERVICES.map((s) => s.title.split(' ')[0]).join(' · ')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: colors.bgCard,
    borderRadius: 16,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: spacing.md,
  },
  formTitle: { color: colors.text, fontWeight: '700', fontSize: 16, marginBottom: spacing.md },
  input: {
    backgroundColor: colors.bg,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: spacing.md,
    color: colors.text,
    marginBottom: spacing.sm,
    fontSize: 15,
  },
  textarea: { minHeight: 100, textAlignVertical: 'top' },
  submit: {
    backgroundColor: colors.red,
    borderRadius: 999,
    paddingVertical: spacing.md,
    alignItems: 'center',
    marginTop: spacing.xs,
  },
  submitDisabled: { opacity: 0.7 },
  submitText: { color: '#fff', fontWeight: '700', fontSize: 16 },
  hint: { color: colors.textMuted, fontSize: 11, marginTop: spacing.sm, textAlign: 'center' },
  success: {
    backgroundColor: colors.bgCard,
    borderRadius: 16,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.red,
    marginTop: spacing.md,
    alignItems: 'center',
  },
  successTitle: { color: colors.text, fontWeight: '800', fontSize: 18, marginBottom: spacing.xs },
  successText: { color: colors.textMuted, marginBottom: spacing.md },
  successLink: { color: colors.red, fontWeight: '600' },
});
