import '../styles/Email.scss';

const Email = ({ values, handleChange, errors }) => {
  return (
    <div className='form__email-container email'>
      <label htmlFor='emailField'>Электронная почта:</label>
      <div className='email__container'>
        <input
          className={
            'email__field ' + (errors.email ? 'email__field--invalid' : '')
          }
          type='email'
          name='email'
          id='emailField'
          required
          value={values.email}
          onChange={handleChange}
          autoComplete='email'
        />
        <p className='email__note'>
          Можно изменить адрес, указанный при регистрации
        </p>
      </div>
      {errors?.email ? (
        <p className='email__error-caption'>{errors.email}</p>
      ) : (
        ''
      )}
    </div>
  );
};

export default Email;
