import Logo from '../logo';
import SearchPanel from '../search-panel';
import Button from '../button';
import { buttonContent } from '../../constants/const';

import './header-panel.css';
import { useEffect } from 'react';

const HeaderPanel = ({ onAddFilm }) => {
  useEffect(() => {
    document.body.style.overflow = `visible`;
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
