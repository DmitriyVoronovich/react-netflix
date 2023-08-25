import { Button, FilmFormInputList } from '../../index';
import { buttonContent, defaultFilm } from '../../../constants/const';
import './style.css';
import { useContext, useState } from 'react';
import { AppContext } from '../../context';

const MovieForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const [film, setFilm] = useState(state.film);
  const handleClick = () => {
    dispatch({
      type: 'submit',
      payload: film
    });
  };

  const closeForm = () => {
    dispatch({
      type: 'close_movie_form'
    });
  };

  return (
    <div className='add_container'>
      <div className='add_form'>
        <button className='add_form_button' onClick={closeForm}></button>
        <h1 className='add_form_title'>{state.title}</h1>
        <FilmFormInputList film={film} setFilm={setFilm} />
        <Button {...buttonContent.resetButton} />
        <Button {...buttonContent.submitButton} onClick={handleClick} />
      </div>
    </div>
  );
};
export default MovieForm;
