import { Footer, Logo, MovieForm } from '../../index';
import './film-form-module.css';

const FilmFormModule = () => {
  return (
    <div className='add_module'>
      <div className='logo_container'>
        <Logo />
      </div>
      <MovieForm onClick={e => e.stopPropagation()} />
      <Footer />
    </div>
  );
};

export default FilmFormModule;
