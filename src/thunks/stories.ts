import {createAsyncThunk} from '@reduxjs/toolkit';
import {HOST} from '../constants/endpoints';
import {IStory} from '../types/story';

const getStory = (id: number) => {
  return fetch(`${HOST}item/${id}.json`);
};

const getStories = (ids: number[]) => {
  return ids.map(id => getStory(id));
};

export const fetchAllStoriesId = createAsyncThunk<string[], void, {}>(
  'users/getAllStoriesId',
  async () => {
    const response = await fetch(`${HOST}topstories.json`);
    const json = await response.json();

    return json;
  },
);

export const fetchRandomStories = createAsyncThunk<IStory[], number[], {}>(
  'users/getStories',
  async ids => {
    const responseArr = await Promise.all(getStories(ids));
    const jsonArr = await Promise.all(
      responseArr.map(response => response.json()),
    );

    return jsonArr;
  },
);
