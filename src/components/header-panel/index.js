import Logo from "../logo";
import SearchPanel from "../search-panel";
import Button from "../button";

import './header-panel.css';

const HeaderPanel = () => {

    const buttonContent = {
        addButton: {name: '+ ADD MOVIE', style: 'add_button', id: 1},
        searchButton: {name: 'SEARCH', style: 'search_panel_button', id: 2}
    }

    return (
        <div className='heard_panel_background'>
            <div className='heard_panel'>
                <span className='heard_panel_log'><Logo/></span>
                <Button {...buttonContent.addButton}/>
                <div className='head_panel_text'>FIND YOUR MOVIE</div>
                <SearchPanel buttonContent={buttonContent.searchButton}/>
            </div>
        </div>
    )
}

export default HeaderPanel;