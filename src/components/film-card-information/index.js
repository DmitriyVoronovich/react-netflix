import React from 'react';
import Logo from "../logo";
import './film-card-information.css'

const FilmCardInformation = ({film, setModalActiveInfo}) => {

    const {img, name, year, genres} = film;

    return (
        <div className='card_module'>
            <div className='logo_container'>
                <Logo/>
            </div>
            <button className='card_button' onClick={() => setModalActiveInfo(false)}></button>
            <div className='card_container'>
                <img className='card_img' src={img}/>
                <div className='card_info_container'>
                    <div className='card_film first'>
                        <div className='card_film_name'>{name}</div>
                        <div className='card_film_rating'>8,9</div>
                    </div>
                    <div className='card_film_genres'>{genres}</div>
                    <div className='card_film'>
                        <div className='card_film_year'>{year}</div>
                        <div className='card_film_time'>1h 45minute</div>
                    </div>
                    <p className='card_film_text'></p>
                </div>
            </div>
        </div>
    );
};

export default FilmCardInformation;