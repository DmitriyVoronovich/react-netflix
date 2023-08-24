import { useReducer } from 'react';
import {
  HeaderPanel,
  MainPage,
  FilmFormModule,
  SuccessModal,
  DeleteModal,
  FilmCardInformation
} from '../index';
import './App.css';
import { defaultState, init } from '../context';
import { reducer } from '../reducer';
import { AppContext } from '../context';

const App = () => {
  const [state, dispatch] = useReducer(reducer, defaultState, init);

  const headerContent = state.filmInfo ? (
    <FilmCardInformation />
  ) : (
    <HeaderPanel />
  );

  return (
    <div className='App'>
      <AppContext.Provider value={{ state, dispatch }}>
        {state.isMovieAdded && <SuccessModal />}
        {state.isFilmFormOpen && <FilmFormModule />}
        {state.isMovieDeleted && <DeleteModal />}
        {headerContent}
        <MainPage />
      </AppContext.Provider>
    </div>
  );
};

export default App;
