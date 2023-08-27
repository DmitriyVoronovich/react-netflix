import './style.css';
import { FilmListItem } from '../index';
import { useContext } from 'react';
import { AppContext } from '../context';

const FilmList = () => {
  const { state } = useContext(AppContext);
  const { films } = state;

  const elements = films.map(film => {
    return <FilmListItem key={film.id} {...film} />;
  });

  return <div className='film_list'>{elements}</div>;
};

export default FilmList;
