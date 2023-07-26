import './main.css'
import GenresMenu from "../genres-menu/genres-menu";
import NumberOfFilms from "../number-of-films/number-of-films";
import FilmList from "../film-list/film-list";
import Footer from "../footer/footer";

function Main ({data}) {
    return (
        <>
            <div className={'main'}>
                <GenresMenu/>
                <div className={'genres_line'}></div>
                <NumberOfFilms/>
                <FilmList data={data}/>
                <Footer/>
            </div>
        </>
    )
}

export default Main;