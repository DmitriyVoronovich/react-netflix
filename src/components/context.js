import { defaultFilm, filmList } from '../constants/const';
import { createContext } from 'react';

export const defaultState = {
  isFilmFormOpen: false,
  isMovieAdded: false,
  isMovieDeleted: false,
  filmInfo: false,
  film: defaultFilm,
  title: '',
  films: filmList
};

export const AppContext = createContext(defaultState);

export function init(state) {
  return { ...state };
}
