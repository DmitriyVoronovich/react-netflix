import { createContext } from 'react';

export const MainPageContext = createContext({
  onEdit: () => {},
  onDelete: () => {},
  onShowFilmInfo: () => {}
});
