import { useContext, useEffect } from 'react';
import { Button, Footer, Logo } from '../index';
import { buttonContent, dispatcherTypes } from '../../constants/const';
import './style.css';
import { AppContext } from '../context';

const DeleteModal = () => {
  const { dispatch } = useContext(AppContext);
  const { CLOSE_DELETE_MODAL } = dispatcherTypes;

  useEffect(() => {
    document.body.style.overflow = `hidden`;
  });

  const handleDelete = () => dispatch({ type: CLOSE_DELETE_MODAL });

  return (
    <div className='delete_modal_container'>
      <div className='logo_container'>
        <Logo />
      </div>
      <button className='add_form_buttons' onClick={handleDelete}></button>
      <div className='delete_modal'>
        <h1 className='delete_modal_title'>Delete MOVIE</h1>
        <h3 className='delete_modal_text'>
          Are you sure you want to delete this movie?
        </h3>
        <Button {...buttonContent.confirmButton} onClick={handleDelete} />
      </div>
      <div className='footer_container'>
        <Footer />
      </div>
    </div>
  );
};

export default DeleteModal;
