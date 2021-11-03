import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import storyReducer from './stories';
import {authorApi} from './authors';

export const store = configureStore({
  reducer: {
    stories: storyReducer,
    [authorApi.reducerPath]: authorApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authorApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
