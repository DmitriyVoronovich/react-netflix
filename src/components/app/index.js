import './App.css';
import HeaderPanel from "../header-panel";
import MainPage from "../main-page";
import film1 from "./img/film1.png"
import film2 from "./img/film2.png"
import film3 from "./img/film3.png"
import film4 from "./img/film4.png"
import film5 from "./img/film5.png"
import film6 from "./img/film6.png"

const App = () => {

    const listOfFilms = [
        {img: film1, name: 'Pulp Fiction', year: '2004', genres: 'Action & Adventure', id: 1},
        {img: film2, name: 'Bohemian Rhapsody', year: '2003', genres: 'Drama, Biography, Music', id: 2},
        {img: film3, name: 'Kill Bill: Vol 2', year: '1994', genres: 'Oscar winning Movie', id: 3},
        {img: film4, name: 'Avengers: War of Infinity', year: '2004', genres: 'Action & Adventure', id: 4},
        {img: film5, name: 'Inception', year: '2003', genres: 'Action & Adventure', id: 5},
        {img: film6, name: 'Reservoir dogs', year: '1994', genres: 'Oscar winning Movie', id: 6}
    ]

    const filmCounter = listOfFilms.length;

    return (
        <div className='App'>
            <HeaderPanel/>
            <MainPage listOfFilms={listOfFilms} filmCounter={filmCounter}/>
        </div>
    );
}

export default App;
