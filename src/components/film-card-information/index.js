import React from 'react';
import Logo from '../logo';
import './film-card-information.css';

const FilmCardInformation = ({ film, setFilmInfo }) => {
  const { img, name, year, genres, rating, time, description } = film;

  return (
    <div className='card_module'>
      <div className='logo_container'>
        <Logo />
      </div>
      <button
        className='card_button'
        onClick={() => setFilmInfo(false)}
      ></button>
      <div className='card_container'>
        <img className='card_img' src={img} alt='Обложка фильма' />
        <div className='card_info_container'>
          <div className='card_film first'>
            <div className='card_film_name'>{name}</div>
            <div className='card_film_rating'>{rating}</div>
          </div>
          <div className='card_film_genres'>{genres}</div>
          <div className='card_film'>
            <div className='card_film_year'>{year}</div>
            <div className='card_film_time'>{time}</div>
          </div>
          <p className='card_film_text'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FilmCardInformation;
