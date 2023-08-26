import { useEffect, useReducer } from 'react';
import {
  HeaderPanel,
  MainPage,
  FilmFormModule,
  SuccessModal,
  DeleteModal,
  FilmCardInformation
} from '../index';
import './style.css';
import { defaultState, init } from '../context';
import { reducer } from '../reducer';
import { AppContext } from '../context';

const App = () => {
  const [state, dispatch] = useReducer(reducer, defaultState, init);
  const { isMovieAdded, isFilmFormOpen, isMovieDeleted, filmInfo } = state;

  // const getAllMovies = (url, method, data) => {
  //   return fetch(url);
  // };
  //
  // useEffect(() => {
  //   getAllMovies('http://localhost:4000/movies', 'GET')
  //     .then(data => {
  //       return data.json();
  //     })
  //     .then(response => console.log(response))
  //     .catch(error => console.log(error));
  // });

  // useEffect(() => {
  //   fetch('http://localhost:4000/movies')
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       console.log(data);
  //     });
  // });

  return (
    <div className='App'>
      <AppContext.Provider value={{ state, dispatch }}>
        {isMovieAdded && <SuccessModal />}
        {isFilmFormOpen && <FilmFormModule />}
        {isMovieDeleted && <DeleteModal />}
        {filmInfo ? <FilmCardInformation /> : <HeaderPanel />}
        <MainPage />
      </AppContext.Provider>
    </div>
  );
};

export default App;
