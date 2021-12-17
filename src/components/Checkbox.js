import '../styles/Checkbox.scss';

const Checkbox = ({ handleChange, errors }) => {
  return (
    <div className='form__checkbox-container checkbox'>
      <div className='checkbox__container'>
        <input
          className='checkbox__field'
          type='checkbox'
          name='checkboxState'
          id='checkboxField'
          onChange={handleChange}
        />
        <label className='checkbox__label' htmlFor='checkboxField'>
          Я согласен принимать актуальную информацию на e-mail
        </label>
      </div>
      {errors.isCheckboxChecked === false && (
        <p className='checkbox__error-caption'>Отметьте чекбокс!</p>
      )}
    </div>
  );
};

export default Checkbox;
