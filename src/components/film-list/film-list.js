import './film-list.css'
import FilmListItem from "../film-list-item/film-list-item";

function FilmList ({data}) {

    const elements = data.map(({img, name, year, genres}) => {
        return (
            <FilmListItem img={img} name={name} year={year} genres={genres} /> // <FilmListItem {...item}
        )
    })

    return (
        <>
            <div class='film_list'>
                {elements}
            </div>
        </>
    )
}

export default FilmList;