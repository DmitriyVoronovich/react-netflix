import './film-list-item.css'

function FilmListItem ({img, name, year, genres}) {

    return (
        <>
            <div className={'film_list_item_container'}>
                <img className={'film_list_item_img'} src={img}/>
                <div class={'film_list_item_info'}>
                <div className={'film_list_item_name'}>{name}</div>
                <div className={'film_list_item_year'}>{year}</div>
                </div>
                <div className={'film_list_item_genres'}>{genres}</div>
            </div>
        </>
    )
}

export default FilmListItem;