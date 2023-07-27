import './film-list-item.css'

const FilmListItem = ({img, name, year, genres}) =>
    (
        <div className='film_item_container'>
            <img className='film_item_img' src={img} alt='movie cover'/>
            <div className='film_item_info'>
                <div className='film_item_name'>{name}</div>
                <div className='film_item_year'>{year}</div>
            </div>
            <div className='film_item_genres'>{genres}</div>
        </div>
    )


export default FilmListItem;