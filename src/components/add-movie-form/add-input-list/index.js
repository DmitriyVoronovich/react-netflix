import './add-input-list.css'

const AddInputList = ({setFilm, film}) => {
    const handleInputChange = (e, fieldName) => {
        const changedFilm = {...film};
        changedFilm[fieldName] = e.target.value;
        setFilm(changedFilm);
    }

    return (
        <form className='add_input_list'>
            <div className='input_container title'>
                <div className='input_name'>TITLE</div>
                <input placeholder='Enter movie title'
                       className='input_style title'
                       value={film.name}
                       onChange={e => handleInputChange(e, 'name')}
                />
            </div>
            <div className='input_container url'>
                <div className='input_name'>MOVIE URL</div>
                <input type='url' placeholder='https://'
                       className='input_style url'
                       value={film.img}
                       onChange={e => handleInputChange(e, 'img')}/>
            </div>
            <div className='input_container genre'>
                <div className='input_name'>GENRE</div>
                <select className='input_style genre'
                        value={film.genres}
                        onChange={e => handleInputChange(e, 'genres')}>
                    <option disabled className='input_style'>Select Genre</option>
                    <option value='Crime'>Crime</option>
                    <option value='Documentary'>Documentary</option>
                    <option value='Horror'>Horror</option>
                    <option value='Comedy'>Comedy</option>
                </select>
            </div>
            <div className='input_container date'>
                <div className='input_name'>RELEASE DATE</div>
                <input placeholder='Select Date'
                       className='input_style date'
                       value={film.year}
                       onChange={e => handleInputChange(e, 'year')}/>
            </div>
            <div className='input_container rating'>
                <div className='input_name'>RATING</div>
                <input type='number' placeholder='Enter movie rating' className='input_style rating'/>
            </div>
            <div className='input_container runtime'>
                <div className='input_name'>RUNTIME</div>
                <input placeholder='minutes' className='input_style runtime'/>
            </div>
            <div className='input_container overview'>
                <div className='input_name'>OVERVIEW</div>
                <textarea placeholder='Movie description' className='input_style overview'/>
            </div>
        </form>
    )
}

export default AddInputList;