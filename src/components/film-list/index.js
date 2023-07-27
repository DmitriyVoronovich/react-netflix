import './film-list.css'
import FilmListItem from "../film-list-item";

const FilmList = ({listOfFilms}) => {

    const elements = listOfFilms.map(({id, ...itemProps}) =>
        (
            <FilmListItem key={id} {...itemProps} />
        ))

    return (
        <>
            <div className='film_list'>
                {elements}
            </div>
        </>
    )
}

export default FilmList;