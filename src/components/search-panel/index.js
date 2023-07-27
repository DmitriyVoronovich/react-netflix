import './search-panel.css'
import Button from "../button";

const SearchPanel = ({buttonContent}) =>
    (
        <div className='search_panel'>
            <input className='search_panel_input' value={'What do you want to watch?'} type={'text'}/>
            <Button {...buttonContent}/>
        </div>
    );


export default SearchPanel;