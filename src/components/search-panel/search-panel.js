import './search-panel.css'

function SearchPanel() {
    return (
        <>
            <div className={'search_panel'}>
                <input className={'search_panel_input'} value={'What do you want to watch?'} type={"text"}/>
                <button className={'search_panel_button'}>SEARCH</button>
            </div>
        </>
    );
}

export default SearchPanel;