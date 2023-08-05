import './number_of_films.css';

const NumberOfFilms = ({ filmCounter }) => (
  <div className='number_of_films'>
    <span className='number'>{filmCounter}</span> movies found
  </div>
);

export default NumberOfFilms;
