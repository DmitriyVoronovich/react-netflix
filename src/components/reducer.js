import { defaultFilm } from '../constants/const';

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'delete':
      const newFilms = state.films.filter(item => item.id !== payload);
      return {
        ...state,
        films: newFilms,
        isMovieDeleted: !state.isMovieDeleted
      };
    case 'close_success_modal':
      document.body.style.overflow = `visible`;
      return {
        ...state,
        isMovieAdded: false
      };
    case 'submit':
      const newFilmsArray = prevFilms => [
        ...prevFilms,
        { ...state.film, id: prevFilms.length + 1 }
      ];
      return {
        ...state,
        films: newFilmsArray,
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
        filmInfo: !state.filmInfo
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
