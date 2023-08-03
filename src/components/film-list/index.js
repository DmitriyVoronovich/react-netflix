import './film-list.css'
import FilmListItem from "../film-list-item";

const FilmList = ({films, onEdit, onDelete, receivingInfo}) => {


    const elements = films.map((film) => {
        const {id, ...itemProps} = film;

        return (
            <FilmListItem key={id} {...itemProps}
                          handleEdit={() => onEdit(film)}
                          onDelete={() => onDelete(film)}
                          handleInfo={() => receivingInfo(film)}/>
        )
    });

    return (
            <div className='film_list'>
                {elements}
            </div>
    )
}

export default FilmList;