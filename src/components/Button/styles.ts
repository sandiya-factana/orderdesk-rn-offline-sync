import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  base: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44,
  },
  fullWidth: {
    width: '100%',
  },

  // Variants
  primary: {
    backgroundColor: '#007AFF',
  },
  success: {
    backgroundColor: '#34C759',
  },
  secondary: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },

  // Disabled
  disabled: {
    backgroundColor: '#CCCCCC',
    opacity: 0.6,
  },

  textBase: {
    fontSize: 16,
    fontWeight: '600',
  },
  textOnPrimary: {
    color: '#FFFFFF',
  },
  textOnSuccess: {
    color: '#FFFFFF',
  },
  textOnSecondary: {
    color: '#333333',
  },
});
