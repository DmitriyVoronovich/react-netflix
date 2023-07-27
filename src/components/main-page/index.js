import './main.css'
import GenresMenu from "../genres-menu";
import NumberOfFilms from "../number-of-films";
import FilmList from "../film-list";
import {Footer} from "../index";

const MainPage = ({listOfFilms, filmCounter}) =>
    (
        <div className='main'>
            <GenresMenu/>
            <div className='genres_line'></div>
            <NumberOfFilms filmCounter={filmCounter}/>
            <FilmList listOfFilms={listOfFilms}/>
            <Footer/>
        </div>
    )


export default MainPage;