import { defaultFilm } from '../constants/const';

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'delete':
      return {
        ...state,
        films: state.films.filter(item => item.id !== payload),
        isMovieDeleted: !state.isMovieDeleted
      };
    case 'close_success_modal':
      document.body.style.overflow = `visible`;
      return {
        ...state,
        isMovieAdded: false
      };
    case 'close_movie_form':
      return {
        ...state,
        isFilmFormOpen: false
      };
    case 'close_info':
      return {
        ...state,
        filmInfo: false
      };
    case 'submit':
      const isFilmExist = state.films.some(item => item.id === payload.id);
      return {
        ...state,
        isMovieAdded: true,
        isFilmFormOpen: false,
        films: isFilmExist
          ? state.films.map(item => (item.id === payload.id ? payload : item))
          : [...state.films, { ...payload, id: state.films.length + 1 }],
        film: defaultFilm
      };
    case 'form':
      return {
        ...state,
        isFilmFormOpen: true,
        title: 'ADD MOVIE'
      };
    case 'info':
      return {
        ...state,
        film: payload,
        filmInfo: true
      };
    case 'edit':
      return {
        ...state,
        film: payload,
        title: 'EDIT MOVIE',
        isFilmFormOpen: true
      };
    case 'close_delete_modal':
      document.body.style.overflow = `visible`;
      return {
        ...state,
        isMovieDeleted: false
      };
    default:
      return state;
  }
};
