import { Button, FilmFormInputList } from '../../index';
import { buttonContent, dispatcherTypes } from 'constants/const';
import './style.css';
import { useContext, useState } from 'react';
import { AppContext } from 'context/context';
const { SUBMIT, CLOSE_MOVIE_FORM } = dispatcherTypes;

const MovieForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const [film, setFilm] = useState(state.film);
  const { title } = state;

  const handleClick = () =>
    dispatch({
      type: SUBMIT,
      payload: film
    });

  const closeForm = () =>
    dispatch({
      type: CLOSE_MOVIE_FORM
    });

  return (
    <div className='add_container'>
      <div className='add_form'>
        <button className='add_form_button' onClick={closeForm}></button>
        <h1 className='add_form_title'>{title}</h1>
        <FilmFormInputList film={film} setFilm={setFilm} />
        <Button {...buttonContent.resetButton} />
        <Button {...buttonContent.submitButton} onClick={handleClick} />
      </div>
    </div>
  );
};
export default MovieForm;
