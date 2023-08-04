import './add-form.css';
import { Button } from '../../index';
import FilmFormInputList from '../film-form-input-list';
import { buttonContent } from '../../../const';

const AddForm = ({
  setFormOpen,
  setIsMovieAdded,
  setFilm,
  film,
  onSubmit,
  title
}) => {
  const handleClick = () => {
    setIsMovieAdded(true);
    setFormOpen(false);
    onSubmit();
  };

  return (
    <div className='add_container'>
      <div className='add_form'>
        <button
          className='add_form_button'
          onClick={() => setFormOpen(false)}
        ></button>
        <h1 className='add_form_title'>{title}</h1>
        <FilmFormInputList setFilm={setFilm} film={film} />
        <Button {...buttonContent.resetButton} />
        <Button {...buttonContent.submitButton} onClick={handleClick} />
      </div>
    </div>
  );
};
export default AddForm;
