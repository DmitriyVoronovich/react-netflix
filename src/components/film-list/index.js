import './film-list.css'
import FilmListItem from "../film-list-item";

const FilmList = ({listOfFilms}) => {

    const elements = listOfFilms.map((item) => {
        const {id,...itemProps} = item;
        return (
            <FilmListItem key={id} {...itemProps} />
        )
    })

    return (
        <>
            <div className='film_list'>
                {elements}
            </div>
        </>
    )
}

export default FilmList;