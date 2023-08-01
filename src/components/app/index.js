import './App.css';
import HeaderPanel from "../header-panel";
import MainPage from "../main-page";
import film1 from "./img/film1.png"
import film2 from "./img/film2.png"
import film3 from "./img/film3.png"
import film4 from "./img/film4.png"
import film5 from "./img/film5.png"
import film6 from "./img/film6.png"
import AddModule from "../add-movie-form/add-module";
import {Component} from "react";
import SuccessModal from "../add-movie-form/success-modal";

class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            modalActive: false,
            modalActiveSuccess: false,
            listOfFilms: [
                {img: film1, name: 'Pulp Fiction', year: '2004', genres: 'Action & Adventure', id: 1},
                {img: film2, name: 'Bohemian Rhapsody', year: '2003', genres: 'Drama, Biography, Music', id: 2},
                {img: film3, name: 'Kill Bill: Vol 2', year: '1994', genres: 'Oscar winning Movie', id: 3},
                {img: film4, name: 'Avengers: War of Infinity', year: '2004', genres: 'Action & Adventure', id: 4},
                {img: film5, name: 'Inception', year: '2003', genres: 'Action & Adventure', id: 5},
                {img: film6, name: 'Reservoir dogs', year: '1994', genres: 'Oscar winning Movie', id: 6}
            ],

            addModuleInput: [
                {name: 'TITLE',type: '', placeholder: 'Enter movie title', id: 1, style: 'title'},
                {name: 'MOVIE URL',type: 'url', placeholder: 'https://', id: 2, style: 'url'},
                {name: 'GENRE',type: 'select', placeholder: 'Select Genre', id: 3, style: 'genre'},
                {name: 'RELEASE DATE',type: 'date', placeholder: 'Select Date', id: 4, style: 'date'},
                {name: 'RATING',type: 'number', placeholder: 'Enter movie rating', id: 5, style: 'rating'},
                {name: 'RUNTIME',type: '', placeholder: 'minutes', id: 6, style: 'runtime'},
                {name: 'OVERVIEW',type: 'text', placeholder: 'Movie description', id: 7, style: 'overview'}
            ],
        }
        this.maxId = 8;
    }

    setModalActive = (modalActive) => {
        this.setState({modalActive})
    }

    setModalActiveSuccess = (modalActiveSuccess) => {
        this.setState({modalActiveSuccess})
    }

    render() {
        const filmCounter = this.state.listOfFilms.length;
        const {addModuleInput, modalActive, listOfFilms, modalActiveSuccess} = this.state;
        const {setModalActive, setModalActiveSuccess} = this;

        return (
            <div className='App'>
                <SuccessModal setActiveSuccess={setModalActiveSuccess} active={modalActiveSuccess}/>
                <AddModule addModuleInput={addModuleInput} active={modalActive} setActive={setModalActive} setModalActiveSuccess={setModalActiveSuccess}/>
                <HeaderPanel setActive={setModalActive}/>
                <MainPage listOfFilms={listOfFilms} filmCounter={filmCounter}/>
            </div>
        );
    }
}

export default App;
