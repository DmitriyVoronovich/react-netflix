import './film-list-item.css'
import {Button} from "../index";
import close from '../add-movie-form/add-form/img/CloseButton.png';

const FilmListItem = ({img, name, year, genres}) => {

    const buttonItem = {
        editButtonItem: {name: 'Edit', style: 'edit_button_item', id: 1},
        deleteButtonItem: {name: 'Delete', style: 'delete_button_item', id: 2}
    }

    return (
        <div className='film_item_container'>
            <div class='film_item_button'>
                <div class='film_button_container'>
                    <img src={close} className='menu_item_button'></img>
                    <Button {...buttonItem.editButtonItem}/>
                    <Button {...buttonItem.deleteButtonItem}/>
                </div>
            </div>
            <img className='film_item_img' src={img} alt='movie cover'/>
            <div className='film_item_info'>
                <div className='film_item_name'>{name}</div>
                <div className='film_item_year'>{year}</div>
            </div>
            <div className='film_item_genres'>{genres}</div>
        </div>
    )
}

export default FilmListItem;