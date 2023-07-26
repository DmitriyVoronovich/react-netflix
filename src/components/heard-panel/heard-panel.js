import Logo from "../logo/logo";


import './heard-panel.css';
import SearchPanel from "../search-panel/search-panel";
import AddButton from "../add-button/add-button";


function HeardPanel() {
    return (
        <>
            <div className={'heard_panel_background'}>
                <div className={'heard_panel'}>
                    <span class={'heard_panel_log'}><Logo/></span>
                    <AddButton/>
                    <div className={'head_panel_text'}>FIND YOUR MOVIE</div>
                    <SearchPanel/>
                </div>
            </div>
        </>
    )
}

export default HeardPanel;