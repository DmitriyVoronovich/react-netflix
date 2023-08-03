import './add-module.css'
import Logo from "../../logo";
import {Footer} from "../../index";
import AddForm from "../add-form";


const AddModule = ({active, setActive, setModalActiveSuccess, onSubmit, setFilm, film, title}) => {


    return (
        <div className={active ? 'add_module active' : 'add_module'}>
            <div className='logo_container'>
                <Logo/>
            </div>
            <AddForm setActive={setActive}
                          onClick={(e) => e.stopPropagation()}
                          setModalActiveSuccess={setModalActiveSuccess}
                          setFilm={setFilm}
                          film={film}
                          onSubmit={onSubmit}
                          title={title}/>
            <Footer/>
        </div>
    )
}

export default AddModule;