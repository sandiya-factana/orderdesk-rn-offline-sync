import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 16,
  },
  form: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 16,
  },
  statusContainer: {
    flexDirection: 'row',
    marginBottom: 24,
    padding: 12,
    backgroundColor: '#F5F5F5',
    borderRadius: 6,
  },
  statusLabel: {
    fontSize: 14,
    color: '#666666',
    fontWeight: '600',
  },
  statusValue: {
    fontSize: 14,
    color: '#333333',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  button: {
    flex: 1,
  },
});
