import Logo from '../logo';
import SearchPanel from '../search-panel';
import Button from '../button';
import { buttonContent } from '../../constants/const';

import './header-panel.css';
import { useContext, useEffect } from 'react';
import { AppContext } from '../context';

const HeaderPanel = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    document.body.style.overflow = `visible`;
  });

  const onAddFilm = () => {
    dispatch({
      type: 'form'
    });
  };

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
