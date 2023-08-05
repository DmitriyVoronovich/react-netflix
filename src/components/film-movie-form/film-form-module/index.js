import { Footer, Logo, MovieForm } from '../../index';
import './film-form-module.css';

const FilmFormModule = ({
  setFormOpen,
  setIsMovieAdded,
  onSubmit,
  setFilm,
  film,
  title
}) => {
  return (
    <div className='add_module'>
      <div className='logo_container'>
        <Logo />
      </div>
      <MovieForm
        setFormOpen={setFormOpen}
        onClick={e => e.stopPropagation()}
        setIsMovieAdded={setIsMovieAdded}
        setFilm={setFilm}
        film={film}
        onSubmit={onSubmit}
        title={title}
      />
      <Footer />
    </div>
  );
};

export default FilmFormModule;
