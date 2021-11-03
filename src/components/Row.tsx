import React from 'react';
import {View, Text, ViewStyle, StyleSheet} from 'react-native';
import {Badge, IBadge} from './Badge';
import {theme} from '../constants/theme';

interface IProps {
  title: string;
  text?: string | number;
  badge?: IBadge;
  style?: ViewStyle;
}

export const Row: React.FC<IProps> = ({title, text, badge, style}) => {
  if (!text) {
    return null;
  }

  return (
    <View style={[styles.row, style]}>
      <View style={styles.titleRow}>
        <Text style={styles.title}>{title}</Text>
        {!!badge && <Badge badge={badge} />}
      </View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    marginVertical: theme.space * 2,
  },
  title: {
    ...theme.fonts.textM,
    fontWeight: '600',
    color: theme.colors.secondary,
  },
  text: {
    ...theme.fonts.textS,
  },
  titleRow: {
    flexDirection: 'row',
  },
});
