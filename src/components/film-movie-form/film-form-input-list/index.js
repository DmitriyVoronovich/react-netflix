import './film-form-input-list.css';
import { ErrorMessage, Field, Form, Formik, useField } from 'formik';
import * as Yup from 'yup';
import MyTextInput from './inputeText';
import { inputInfo } from '../../../const';

const FilmFormInputList = ({ setFilm, film }) => {
  const handleInputChange = (e, fieldName) => {
    const changedFilm = { ...film };
    changedFilm[fieldName] = e.target.value;
    setFilm(changedFilm);
  };

  const first = inputInfo.slice(0, 2).map(ip => {
    const { id, ...itemProps } = ip;

    return (
      <MyTextInput
        key={id}
        {...itemProps}
        handleInputChange={handleInputChange}
      />
    );
  });

  const second = inputInfo.slice(2).map(ip => {
    const { id, ...itemProps } = ip;

    return (
      <MyTextInput
        key={id}
        {...itemProps}
        handleInputChange={handleInputChange}
      />
    );
  });

  const DisplayingErrorMessagesSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Минимум 2 символа для заполнения'),
    img: Yup.string().url(),
    genres: Yup.string(),
    year: Yup.date(),
    rating: Yup.number().max(10, 'Максимальный рейтинг фильма 10'),
    time: Yup.string(),
    description: Yup.string().max(300, 'Не более 300 символов')
  });

  return (
    <Formik
      initialValues={{
        name: '',
        img: '',
        genres: '',
        year: '',
        rating: 0,
        time: '',
        description: ''
      }}
      validationSchema={DisplayingErrorMessagesSchema}
      onSubmit={values => console.log(JSON.stringify(values, null, 2))}
    >
      <Form className='film_form_input_list'>
        {first}
        <div className='input_container genres'>
          <label htmlFor='genres' className='input_name'>
            GENRE
          </label>
          <Field
            name='genres'
            className='input_style genres'
            value={film.genres}
            onChange={e => handleInputChange(e, 'genres')}
            as='select'
          >
            <option value=''>Select Genre</option>
            <option value='Crime'>Crime</option>
            <option value='Documentary'>Documentary</option>
            <option value='Crime'>Horror</option>
            <option value='Comedy'>Crime</option>
          </Field>
          <ErrorMessage component='div' className='error' name='genres' />
        </div>
        {second}
      </Form>
    </Formik>
  );
};

export default FilmFormInputList;
