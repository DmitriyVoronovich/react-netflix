import './film-list.css';
import FilmListItem from '../film-list-item';

const FilmList = ({ films, onEdit, onDelete, onShowFilmInfo }) => {
  const elements = films.map(film => {
    const { id, ...itemProps } = film;

    return (
      <FilmListItem
        key={id}
        {...itemProps}
        handleEdit={() => onEdit(film)}
        onDelete={() => onDelete(film)}
        handleInfo={() => onShowFilmInfo(film)}
      />
    );
  });

  return <div className='film_list'>{elements}</div>;
};

export default FilmList;
