import { Footer, FilmList, NumberOfFilms, GenresMenu } from '../index';
import './style.css';
import { useContext } from 'react';
import { AppContext } from 'context/context';

const MainPage = () => {
  const { state } = useContext(AppContext);
  const { films } = state;

  const filmCounter = films.length;

  return (
    <div className='main'>
      <GenresMenu />
      <div className='genres_line'></div>
      <NumberOfFilms filmCounter={filmCounter} />
      <FilmList />
      <Footer />
    </div>
  );
};

export default MainPage;
