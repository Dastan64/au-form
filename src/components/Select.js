import '../styles/Select.scss';

import { formatCities, biggestCity } from '../utils/formatCities';

const Select = ({ handleChange, values, errors }) => {
  const citiesList = formatCities().map((city) => {
    return (
      <option
        className='select__option'
        key={city.population.toString()}
        value={city.city}>
        {city.city}
      </option>
    );
  });

  return (
    <div className='form__select-container select'>
      <label className='select__label' htmlFor='cities'>
        Ваш город:
      </label>
      <select
        className='select__field'
        value={values.city}
        name='city'
        id='cities'
        onChange={handleChange}
        required>
        <option className='select__option' value='Выберите город' disabled>
          Выберите город
        </option>
        <option className='select__option' value={biggestCity().city}>
          {biggestCity().city}
        </option>
        {citiesList}
      </select>
      {errors.cityError && (
        <p className='select__error-caption'>{errors.cityError}</p>
      )}
    </div>
  );
};

export default Select;
