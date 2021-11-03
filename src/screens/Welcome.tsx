import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Button} from '../components/Button';
import {theme} from '../constants/theme';

interface IProps {
  handler: () => void;
}

export const Welcome: React.FC<IProps> = React.memo(({handler}) => {
  return (
    <>
      <Text style={styles.welcomeText}>Welcome</Text>
      <Button title="Give me ten stories" handler={handler} />
    </>
  );
});

const styles = StyleSheet.create({
  welcomeText: {
    ...theme.fonts.textXL,
    fontWeight: '600',
    color: theme.colors.secondary,
  },
});
