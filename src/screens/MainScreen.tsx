import React, {useCallback} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Error} from '../components/Error';
import {RANDOM_STORIES_NUMBER} from '../constants/stories';
import {selectAll, selectIsLoading, selectError} from '../selectors/stories';
import {RootState} from '../store';
import {getRandomUniqueArr} from '../utils/getRandomUnuqueArr';
import {Welcome} from './Welcome';
import {Stories} from './Stories';
import {theme} from '../constants/theme';
import {fetchAllStoriesId, fetchRandomStories} from '../thunks/stories';

export const MainScreen = React.memo(() => {
  const dispatch = useDispatch();
  const isLoading = useSelector((store: RootState) => selectIsLoading(store));
  const error = useSelector((store: RootState) => selectError(store));
  const stories = useSelector((store: RootState) => selectAll(store));
  const showWelcomeScreen = !isLoading && !error && stories.length === 0;
  const storiesLoaded = stories.length > 0;

  const buttonPressHandler = useCallback(() => {
    dispatch(fetchAllStoriesId())
      .unwrap()
      .then((ids: number[]) => {
        const randomIds = getRandomUniqueArr<number>(
          ids,
          RANDOM_STORIES_NUMBER,
        );
        dispatch(fetchRandomStories(randomIds));
      });
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {isLoading && (
        <ActivityIndicator size={50} color={theme.colors.primary} />
      )}
      {error && <Error />}
      {showWelcomeScreen && <Welcome handler={buttonPressHandler} />}
      {storiesLoaded && <Stories stories={stories} />}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
