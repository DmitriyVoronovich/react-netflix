import { useReducer } from 'react';
import {
  DeleteModal,
  FilmCardInformation,
  FilmFormModule,
  HeaderPanel,
  MainPage,
  SuccessModal
} from '../index';
import { defaultState, init } from 'context/context';
import { reducer } from 'context/reducer';
import { AppContext } from 'context/context';
import './style.css';

const App = () => {
  const [state, dispatch] = useReducer(reducer, defaultState, init);
  const { isMovieAdded, isFilmFormOpen, isMovieDeleted, filmInfo } = state;

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
