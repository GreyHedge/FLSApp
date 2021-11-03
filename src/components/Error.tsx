import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {theme} from '../constants/theme';

export const Error: React.FC = () => {
  return (
    <View style={styles.error}>
      <Text style={styles.errorText}>Oh, no! Something wierd happened</Text>
      <Text style={styles.errorText}>Keep calm and try again</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    borderRadius: theme.space * 2,
    borderColor: theme.colors.accent,
    borderWidth: theme.space / 2,
    width: '90%',
    padding: theme.space * 4,
    alignItems: 'center',
  },
  errorText: {
    ...theme.fonts.textM,
    color: theme.colors.secondary,
    fontWeight: '600',
  },
});
