import './success-modal.css'
import Logo from "../../logo";
import {Footer} from "../../index";
import suc from './img/group.png'

const SuccessModal = ({setActiveSuccess, active}) => {
    return (
        <div className={active ? 'success_modal_container active' : 'success_modal_container'}>
            <div className='logo_container'>
                <Logo/>
            </div>
            <button className='add_form_buttons' onClick={() => setActiveSuccess(false)}></button>
            <div className='success_modal'>
                <img className='success_modal_img' src={suc}/>
                <h1 className='success_modal_title'>congratulations !</h1>
                <h3 className='success_modal_text'>The movie has been added to database successfully</h3>
            </div>
            <div className='footer_container'>
                <Footer/>
            </div>
        </div>
    )
}

export default SuccessModal;