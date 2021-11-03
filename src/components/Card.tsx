import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Row} from './Row';
import {BadgeType} from './Badge';
import {theme} from '../constants/theme';
import {IStory} from '../types/story';
import {useGetAuthorQuery} from '../store/authors';

const SCORE_STUB = '?';

interface IProps {
  story: IStory;
}

export const Card: React.FC<IProps> = ({story}) => {
  const {title, url, time, by: author, score} = story;
  const {data, isLoading} = useGetAuthorQuery(author);

  return (
    <View style={styles.card}>
      <Row title="Title" text={title} badge={{score, type: BadgeType.STORY}} />
      <Row title="URL" text={url} />
      <Row title="Timestamp" text={time} />
      <Row
        title="Author"
        text={author}
        badge={{
          isLoading,
          type: BadgeType.AUTHOR,
          score: data?.karma || SCORE_STUB,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.space * 2,
    paddingTop: theme.space * 4,
    paddingHorizontal: theme.space * 4,
    paddingBottom: theme.space * 2,
    marginBottom: theme.space * 4,
  },
});
