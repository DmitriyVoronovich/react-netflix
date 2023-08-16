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

  const firstPart = inputInfo.slice(0, 2).map(ip => {
    const { id, ...itemProps } = ip;

    return (
      <MyTextInput
        key={id}
        {...itemProps}
        handleInputChange={handleInputChange}
      />
    );
  });

  const secondPart = inputInfo.slice(2).map(ip => {
    const { id, ...itemProps } = ip;

    return (
      <MyTextInput
        key={id}
        {...itemProps}
        handleInputChange={handleInputChange}
      />
    );
  });

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    rating: Yup.number()
      .min(0, 'Less then min value!')
      .max(10, 'More then max value!')
      .required('Required'),
    img: Yup.string().required('Required'),
    time: Yup.number().min(0, 'Too low!').required('Required'),
    year: Yup.string().required('Required'),
    genres: Yup.array().min(1, 'Less then min value!').required('Required'),
    description: Yup.string().required('Required')
  });

  return (
    <Formik
      initialValues={{
        name: '',
        img: '',
        genres: '',
        year: '',
        rating: 0,
        time: 0,
        description: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={values => console.log(JSON.stringify(values, null, 2))}
    >
      <Form className='film_form_input_list'>
        {firstPart}
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
        {secondPart}
      </Form>
    </Formik>
  );
};

export default FilmFormInputList;
