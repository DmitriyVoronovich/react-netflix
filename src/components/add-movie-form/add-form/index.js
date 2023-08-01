import './add-form.css'
import {Button} from "../../index";
import AddInputList from "../add-input-list";

const AddForm = ({addModuleInput, setActive, setModalActiveSuccess}) => {

    const addButtonContent = {
        resetButton: {name: 'RESET', style: 'reset_button', id: 1, type: ''},
        submitButton: {name: 'SUBMIT', style: 'submit_button', id: 2, type: 'submit'}
    }

    const handleClick = () => {
        setModalActiveSuccess(true)
        setActive(false)
    }

    return (
        <div class='add_form'>
            <button class='add_form_button' onClick={() => setActive(false)}></button>
            <h1 className='add_form_title'>ADD MOVIE</h1>
            <AddInputList addModuleInput={addModuleInput}/>
            <Button {...addButtonContent.resetButton}/>
            <Button {...addButtonContent.submitButton} onClick={handleClick}/>
        </div>
    )
}
export default AddForm;