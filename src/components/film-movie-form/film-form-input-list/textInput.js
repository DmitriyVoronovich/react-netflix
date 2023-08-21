import './film-form-input-list.css';
import { useField } from 'formik';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={`input_container ${props.name}`}>
      <label htmlFor={props.name} className='input_name'>
        {label}
      </label>
      <input
        className={`input_style ${props.name}`}
        {...field}
        {...props}
        value={props.value}
        autoComplete='off'
        onChange={e => props.handleInputChange(e, `${props.name}`)}
      />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextInput;

// <div className='input_container genres'>
//     <label htmlFor='genres' className='input_name'>
//         GENRE
//     </label>
//     <Field
//         name='genres'
//         className='input_style genres'
//         value={film.genres}
//         onChange={e => handleInputChange(e, 'genres')}
//         as='select'
//     >
//         <option value=''>Select Genre</option>
//         <option value='Crime'>Crime</option>
//         <option value='Documentary'>Documentary</option>
//         <option value='Crime'>Horror</option>
//         <option value='Comedy'>Crime</option>
//     </Field>
//     <ErrorMessage component='div' className='error' name='genres' />
// </div>
