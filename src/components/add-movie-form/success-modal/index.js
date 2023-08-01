import './success-modal.css'
import Logo from "../../logo";
import {Footer} from "../../index";
import suc from './img/group.png'

const SuccessModal = ({setActiveSuccess, active}) => {
    return (
        <div className={active ? 'success_modal_container active' : 'success_modal_container'}>
            <div class='logo_container'>
                <Logo/>
            </div>
            <button className='add_form_buttons' onClick={() => setActiveSuccess(false)}></button>
            <div class='success_modal'>
                <img class='success_modal_img' src={suc}/>
                <h1 class='success_modal_title'>congratulations !</h1>
                <h3 class='success_modal_text'>The movie has been added to database successfully</h3>
            </div>
            <div class='footer_container'>
                <Footer/>
            </div>
        </div>

    )
}

export default SuccessModal;