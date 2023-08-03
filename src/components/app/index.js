import './App.css';
import HeaderPanel from "../header-panel";
import MainPage from "../main-page";
import AddModule from "../add-movie-form/add-module";
import SuccessModal from "../add-movie-form/success-modal";
import DeleteModal from "../delete-modal";
import {useState} from "react";
import {filmList} from "../../const";
import FilmCardInformation from "../film-card-information";

const defaultFilm = {img: '', name: '', year: '', genres: ''};

const App = () => {
    const [modalActive, setModalActive] = useState(false);
    const [modalActiveSuccess, setModalActiveSuccess] = useState(false);
    const [modalActiveDelete, setModalActiveDelete] = useState(false);
    const [modalActiveInfo, setModalActiveInfo] = useState(false);
    const [film, setFilm] = useState(defaultFilm);
    const [title, setTitle] = useState('');
    const [films, setFilms] = useState(filmList);

    const onSubmit = () => {
        setFilms((prevFilms) => [...prevFilms, {...film, id:prevFilms.length + 1}]);
        setFilm(defaultFilm);
    }

    const onDelete = (film) => {
        setFilms(films.filter(item => item.id !== film.id));
        setModalActiveDelete(true);
    }

    const onEdit = (editedFilm) => {
        setFilm(editedFilm);
        setModalActive(true);
        setTitle('EDIT MOVIE');
    }

    const receivingInfo = (receivingFilm) => {
        setFilm(receivingFilm);
        setModalActiveInfo(true);
    }

    const onAddFilm = () => {
        setModalActive(true);
        setTitle('ADD MOVIE');
    }

    const headerContent = modalActiveInfo ? <FilmCardInformation setModalActiveInfo={setModalActiveInfo} film={film}/> : <HeaderPanel onAddFilm={onAddFilm} />


    const filmCounter = films.length;

    return (
        <div className='App'>
            <SuccessModal setActiveSuccess={setModalActiveSuccess} active={modalActiveSuccess}/>
            <AddModule active={modalActive} setActive={setModalActive} setModalActiveSuccess={setModalActiveSuccess} onSubmit={onSubmit} film={film} setFilm={setFilm} title={title}/>
            <DeleteModal active={modalActiveDelete} setModalActiveDelete={setModalActiveDelete} film={film}/>
            {headerContent}
            <MainPage films={films} filmCounter={filmCounter} onEdit={onEdit} onDelete={onDelete} receivingInfo={receivingInfo}/>
        </div>
    );
}

export default App;
