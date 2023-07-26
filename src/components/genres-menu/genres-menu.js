import './genres-menu.css'
import SortPanel from "../sort-panel/sort-panel";

function GenresMenu () {
    return (
        <div className={'genres_menu'}>
            <ul className={'genres_list'}>
                <li className={'genres_item'}>ALL</li>
                <li>DOCUMENTARY</li>
                <li>COMEDY</li>
                <li>HORROR</li>
                <li>CRIME</li>
            </ul>
            <SortPanel/>
        </div>
    )
}

export default GenresMenu;