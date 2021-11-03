import React from 'react';
import {StyleSheet, FlatList, ListRenderItemInfo} from 'react-native';
import {theme} from '../constants/theme';
import {IStory} from '../types/story';
import {Card} from '../components/Card';

const keyExtractor = (item: IStory) => item.id;

const renderItem = (info: ListRenderItemInfo<IStory>) => {
  return <Card story={info.item} />;
};

interface IProps {
  stories: IStory[];
}

export const Stories: React.FC<IProps> = React.memo(({stories}) => {
  return (
    <FlatList
      data={stories}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    />
  );
});

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.space * 4,
    paddingTop: theme.space * 4,
  },
});
