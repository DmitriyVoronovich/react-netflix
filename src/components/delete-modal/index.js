import './delete-modal.css';
import Logo from '../logo';
import { Button, Footer } from '../index';
import { buttonContent } from '../../const';

const DeleteModal = ({ setIsMovieDeleted }) => {
  return (
    <div className='delete_modal_container'>
      <div className='logo_container'>
        <Logo />
      </div>
      <button
        className='add_form_buttons'
        onClick={() => setIsMovieDeleted(false)}
      ></button>
      <div className='delete_modal'>
        <h1 className='delete_modal_title'>Delete MOVIE</h1>
        <h3 className='delete_modal_text'>
          Are you sure you want to delete this movie?
        </h3>
        <Button
          {...buttonContent.confirmButton}
          onClick={() => setIsMovieDeleted(false)}
        />
      </div>
      <div className='footer_container'>
        <Footer />
      </div>
    </div>
  );
};

export default DeleteModal;
