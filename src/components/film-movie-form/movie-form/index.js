import { Button, FilmFormInputList } from '../../index';
import { buttonContent } from '../../../constants/const';
import './movie-form.css';
import { useContext } from 'react';
import { AppContext } from '../../context';

const MovieForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const handleClick = () => {
    state.isMovieAdded(true);
    state.isFilmFormOpen(false);
    dispatch({
      type: 'submit'
    });
  };

  return (
    <div className='add_container'>
      <div className='add_form'>
        <button
          className='add_form_button'
          onClick={() => state.isFilmFormOpen(false)}
        ></button>
        <h1 className='add_form_title'>{state.title}</h1>
        <FilmFormInputList />
        <Button {...buttonContent.resetButton} />
        <Button {...buttonContent.submitButton} onClick={handleClick} />
      </div>
    </div>
  );
};
export default MovieForm;
