import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ActivityScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Activity</ThemedText>
      <ThemedText>Your activity will appear here.</ThemedText>
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
