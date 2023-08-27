import { useContext } from 'react';
import { AppContext } from 'context/context';
import { FilmListItem } from '../index';
import './style.css';

const FilmList = () => {
  const { state } = useContext(AppContext);
  const { films } = state;

  const elements = films.map(film => {
    return <FilmListItem key={film.id} {...film} />;
  });

  return <div className='film_list'>{elements}</div>;
};

export default FilmList;
