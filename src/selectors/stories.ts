import {RootState} from '../store';
import {storiesAdapter} from '../store/stories';

export const {selectAll} = storiesAdapter.getSelectors<RootState>(
  state => state.stories,
);

export const selectIsLoading = (state: RootState) => state.stories.isLoading;
export const selectError = (state: RootState) => state.stories.error;
