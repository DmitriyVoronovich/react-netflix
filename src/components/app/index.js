import { createContext, useState } from 'react';
import {
  HeaderPanel,
  MainPage,
  FilmFormModule,
  SuccessModal,
  DeleteModal,
  FilmCardInformation
} from '../index';
import { filmList, defaultFilm } from '../../constants/const';
import './App.css';

const App = () => {
  const [isFilmFormOpen, setIsFilmFormOpen] = useState(false);
  const [isMovieAdded, setIsMovieAdded] = useState(false);
  const [isMovieDeleted, setIsMovieDeleted] = useState(false);
  const [filmInfo, setFilmInfo] = useState(false);
  const [film, setFilm] = useState(defaultFilm);
  const [title, setTitle] = useState('');
  const [films, setFilms] = useState(filmList);

  export const MainPageContext = useState({
    onEdit: onEdit,
    onDelete: onDelete,
    onShowFilmInfo: onShowFilmInfo
  });

  const onSubmit = () => {
    setFilms(prevFilms => [
      ...prevFilms,
      { ...film, id: prevFilms.length + 1 }
    ]);
    setFilm(defaultFilm);
  };

  const onDelete = film => {
    setFilms(films.filter(item => item.id !== film.id));
    setIsMovieDeleted(true);
  };

  const onEdit = editedFilm => {
    setFilm(editedFilm);
    setIsFilmFormOpen(true);
    setTitle('EDIT MOVIE');
  };

  const onShowFilmInfo = receivingFilm => {
    setFilm(receivingFilm);
    setFilmInfo(true);
  };

  const onAddFilm = () => {
    setIsFilmFormOpen(true);
    setTitle('ADD MOVIE');
  };

  const onCloseModal = () => {
    setIsMovieAdded(false);
  };

  const headerContent = filmInfo ? (
    <FilmCardInformation setFilmInfo={setFilmInfo} film={film} />
  ) : (
    <HeaderPanel onAddFilm={onAddFilm} />
  );

  return (
    <MainPageContext.Provider value={MainPageContext}>
      <div className='App'>
        {isMovieAdded && <SuccessModal onCloseModal={onCloseModal} />}
        {isFilmFormOpen && (
          <FilmFormModule
            setFormOpen={setIsFilmFormOpen}
            setIsMovieAdded={setIsMovieAdded}
            onSubmit={onSubmit}
            film={film}
            setFilm={setFilm}
            title={title}
          />
        )}
        {isMovieDeleted && (
          <DeleteModal setIsMovieDeleted={setIsMovieDeleted} film={film} />
        )}
        {headerContent}
        <MainPage
          films={films}
          onEdit={onEdit}
          onDelete={onDelete}
          onShowFilmInfo={onShowFilmInfo}
        />
      </div>
    </MainPageContext.Provider>
  );
};

export default App;
