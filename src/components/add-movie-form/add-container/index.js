import './add-container.css'
import AddForm from "../add-form";
import {Button} from "../../index";

const AddContainer = ({addModuleInput, setActive, setModalActiveSuccess}) => {

    return (
        <div className='add_container'>
            <AddForm addModuleInput={addModuleInput} setActive={setActive} setModalActiveSuccess={setModalActiveSuccess}/>
        </div>
    )
}

export default AddContainer;