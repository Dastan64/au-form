import '../styles/Password.scss';

const Password = ({ values, handleChange, errors }) => {
  return (
    <div className='form__password-container password'>
      <div className='password__initial'>
        <label className='password__label' htmlFor='passwordField'>
          Пароль:
        </label>
        <div className='password__initial-container'>
          <input
            className={
              'password__field ' +
              (errors.password ? 'password__field--invalid' : '')
            }
            type='password'
            name='password'
            id='passwordField'
            value={values.password}
            onChange={handleChange}
            required
          />
          <p className='password__first-note'>
            Ваш новый пароль должен содержать не менее 5 символов.
          </p>
        </div>
        {errors.password && (
          <p className='password__error-caption'>{errors.password}</p>
        )}
      </div>
      <div className='password__confirm'>
        <label className='password__label' htmlFor='passwordField2'>
          Пароль ещё раз:
        </label>
        <div className='password__confirm-container'>
          <input
            className={
              'password__field ' +
              (errors.password ? 'password__field--invalid' : '')
            }
            type='password'
            name='confirmPassword'
            id='passwordField2'
            onChange={handleChange}
            value={values.confirmPassword}
            required
          />
          <p className='password__second-note'>
            Повторите пароль, пожалуйста, это обезопасит вас с нами на случай
            ошибки.
          </p>
        </div>
        {errors.confirmPassword && (
          <p className='password__error-caption'>{errors.confirmPassword}</p>
        )}
      </div>
    </div>
  );
};

export default Password;
