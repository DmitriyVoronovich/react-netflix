import './add-form.css'
import {Button} from "../../index";
import AddInputList from "../add-input-list";

const AddForm = ({setActive, setModalActiveSuccess, setFilm, film, onSubmit, title}) => {

    const addButtonContent = {
        resetButton: {name: 'RESET', style: 'reset_button', id: 1, type: ''},
        submitButton: {name: 'SUBMIT', style: 'submit_button', id: 2, type: 'submit'},
        editButton: {name: 'EDIT', style: 'submit_button', id: 2, type: ''}
    }

    const handleClick = () => {
        setModalActiveSuccess(true)
        setActive(false)
        onSubmit()
    }

    return (
        <div className='add_container'>
            <div className='add_form'>
                <button className='add_form_button' onClick={() => setActive(false)}></button>
                <h1 className='add_form_title'>{title}</h1>
                <AddInputList setFilm={setFilm} film={film}/>
                <Button {...addButtonContent.resetButton}/>
                <Button {...addButtonContent.submitButton} onClick={handleClick}/>
            </div>
        </div>
    )
}
export default AddForm;