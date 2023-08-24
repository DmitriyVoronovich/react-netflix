import './film-list.css';
import { FilmListItem } from '../index';
import { useContext } from 'react';
import { AppContext } from '../context';

const FilmList = () => {
  const { state } = useContext(AppContext);
  const elements = state.films.map(film => {
    return <FilmListItem key={film.id} {...film} />;
  });

  return <div className='film_list'>{elements}</div>;
};

export default FilmList;
