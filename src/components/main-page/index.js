import './main.css';
import GenresMenu from '../genres-menu';
import NumberOfFilms from '../number-of-films';
import FilmList from '../film-list';
import { Footer } from '../index';

const MainPage = ({ films, onEdit, onDelete, onShowFilmInfo }) => {
  const filmCounter = films.length;

  return (
    <div className='main'>
      <GenresMenu />
      <div className='genres_line'></div>
      <NumberOfFilms filmCounter={filmCounter} />
      <FilmList
        films={films}
        onEdit={onEdit}
        onDelete={onDelete}
        onShowFilmInfo={onShowFilmInfo}
      />
      <Footer />
    </div>
  );
};

export default MainPage;
