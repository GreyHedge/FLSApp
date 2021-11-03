import {createSlice, createEntityAdapter} from '@reduxjs/toolkit';
import {fetchAllStoriesId, fetchRandomStories} from '../thunks/stories';
import {IStory} from '../types/story';
import {RootState} from '.';

interface IStoriesState {
  isLoading: boolean;
  error: boolean;
  allId: number[];
}

export const storiesAdapter = createEntityAdapter<IStory>({
  sortComparer: (first: IStory, second: IStory) => first.score - second.score,
});
const storysSlice = createSlice({
  name: 'stories',
  initialState: storiesAdapter.getInitialState<IStoriesState>({
    isLoading: false,
    error: false,
    allId: [],
  }),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAllStoriesId.pending, state => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchAllStoriesId.fulfilled, (state, action) => {
      state.allId = action.payload;
    });
    builder.addCase(fetchAllStoriesId.rejected, state => {
      state.error = true;
      state.isLoading = false;
    });
    builder.addCase(fetchRandomStories.pending, state => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchRandomStories.fulfilled, (state, action) => {
      storiesAdapter.setAll(state, action.payload);
      state.isLoading = false;
    });
    builder.addCase(fetchRandomStories.rejected, state => {
      state.error = true;
      state.isLoading = false;
    });
  },
});

export default storysSlice.reducer;
