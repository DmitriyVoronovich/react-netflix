import Logo from '../logo';
import SearchPanel from '../search-panel';
import Button from '../button';
import { buttonContent, dispatcherTypes } from 'constants/const';
import './style.css';
import { useContext, useEffect } from 'react';
import { AppContext } from 'context/context';
const { FORM } = dispatcherTypes;

const HeaderPanel = () => {
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    document.body.style.overflow = `visible`;
  }, []);

  const onAddFilm = () =>
    dispatch({
      type: FORM
    });

  return (
    <div className='heard_panel_background'>
      <div className='heard_panel'>
        <span className='heard_panel_log'>
          <Logo />
        </span>
        <Button {...buttonContent.addButton} onClick={onAddFilm} />
        <div className='head_panel_text'>FIND YOUR MOVIE</div>
        <SearchPanel buttonContent={buttonContent.searchButton} />
      </div>
    </div>
  );
};

export default HeaderPanel;
