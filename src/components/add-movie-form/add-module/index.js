import './add-module.css';
import Logo from '../../logo';
import { Footer } from '../../index';
import AddForm from '../add-form';

const AddModule = ({
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
      <AddForm
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

export default AddModule;
