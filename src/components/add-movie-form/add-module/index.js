import './add-module.css'
import Logo from "../../logo";
import {Footer} from "../../index";
import AddContainer from "../add-container";

const AddModule = ({addModuleInput, active, setActive, setModalActiveSuccess}) => {
    return (
        <div className={active ? 'add_module active' : 'add_module'}>
            <div class='logo_container'>
                <Logo/>
            </div>
            <AddContainer addModuleInput={addModuleInput} setActive={setActive} onClick={(e) => e.stopPropagation()} setModalActiveSuccess={setModalActiveSuccess}/>
            <Footer/>
        </div>
    )
}

export default AddModule;