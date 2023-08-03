import './delete-modal.css'
import Logo from "../logo";
import {Button, Footer} from "../index";

const DeleteModal = ({active, setModalActiveDelete}) => {
    const buttonContent = {
        confirmButton: {name: 'confirm', style: 'confirm_button', id: 1}
    }

    return (
        <div className={active ? 'delete_modal_container active' : 'delete_modal_container'}>
            <div className='logo_container'>
                <Logo/>
            </div>
            <button className='add_form_buttons' onClick={() => setModalActiveDelete(false)}></button>
            <div className='delete_modal'>
                <h1 className='delete_modal_title'>Delete MOVIE</h1>
                <h3 className='delete_modal_text'>Are you sure you want to delete this movie?</h3>
                <Button {...buttonContent.confirmButton} onClick={() => setModalActiveDelete(false)}/>
            </div>
            <div className='footer_container'>
                <Footer/>
            </div>
        </div>
    )
}

export default DeleteModal;