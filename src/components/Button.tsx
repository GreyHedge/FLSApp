import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {theme} from '../constants/theme';

interface IProps {
  title: string;
  handler: () => void;
}

export const Button: React.FC<IProps> = ({title, handler}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handler}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.space * 2,
    height: 40,
    width: '80%',
  },
  text: {
    ...theme.fonts.textM,
    fontWeight: '600',
    color: theme.colors.accentLight,
  },
});
