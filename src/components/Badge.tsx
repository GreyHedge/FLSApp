import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {theme} from '../constants/theme';

export enum BadgeType {
  STORY = 'Story',
  AUTHOR = 'Autor',
}

export interface IBadge {
  type: BadgeType;
  score: number | string;
  isLoading?: boolean;
}

interface IProps {
  badge: IBadge;
}

export const Badge: React.FC<IProps> = ({badge}) => {
  const {type, score, isLoading} = badge;

  return (
    <View
      style={[
        styles.badge,
        type === BadgeType.STORY ? styles.storeBage : styles.authorBage,
      ]}>
      {isLoading ? (
        <ActivityIndicator color={theme.colors.background} />
      ) : (
        <Text
          style={
            type === BadgeType.STORY
              ? styles.storeBageText
              : styles.authorBageText
          }>
          {score}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  bage: {
    borderRadius: theme.space * 6,
    paddingVertical: theme.space * 2,
    paddingHorizontal: theme.space * 4,
    alignItems: 'center',
    marginLeft: theme.space * 2,
  },
  storeBage: {
    backgroundColor: theme.colors.accent,
  },
  storeBageText: {
    color: theme.colors.accentLight,
    fontWeight: '600',
  },
  authorBage: {
    backgroundColor: theme.colors.secondary,
  },
  authorBageText: {
    color: theme.colors.background,
    fontWeight: '600',
  },
  badge: {
    minWidth: 30,
    alignItems: 'center',
    padding: theme.space,
    borderRadius: theme.space * 4,
    transform: [{translateY: -theme.space * 3}, {translateX: theme.space}],
  },
});
