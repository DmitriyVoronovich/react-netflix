import { Footer, Logo } from '../../index';
import suc from './img/group.png';
import './style.css';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../context';
import { dispatcherTypes } from '../../../constants/const';
const { dispatch } = useContext(AppContext);

const SuccessModal = () => {
  const { CLOSE_SUCCESS_MODAL } = dispatcherTypes;

  useEffect(() => {
    document.body.style.overflow = `hidden`;
  }, []);

  const onCloseModal = () =>
    dispatch({
      type: CLOSE_SUCCESS_MODAL
    });

  return (
    <div className='success_modal_container'>
      <div className='logo_container'>
        <Logo />
      </div>
      <button className='add_form_buttons' onClick={onCloseModal}></button>
      <div className='success_modal'>
        <img
          className='success_modal_img'
          src={suc}
          alt='Успешное добавление'
        />
        <h1 className='success_modal_title'>congratulations !</h1>
        <h3 className='success_modal_text'>
          The movie has been added to database successfully
        </h3>
      </div>
      <div className='footer_container'>
        <Footer />
      </div>
    </div>
  );
};

export default SuccessModal;
