import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function AccountScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Account</ThemedText>
      <ThemedText>Your account settings will appear here.</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 8,
  },
});
