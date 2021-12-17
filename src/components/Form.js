import '../styles/Form.scss';

//Form elements
import Select from './Select';
import Password from './Password';
import Email from './Email';
import Checkbox from './Checkbox';

//Utils
import useForm from '../hooks/useForm';
import getDate from '../utils/getDate';

const Form = () => {
  const { values, handleChange, handleSubmit, errors } = useForm();
  return (
    <form className='form' noValidate onSubmit={handleSubmit}>
      <Select handleChange={handleChange} values={values} errors={errors} />
      <hr />
      <Password values={values} handleChange={handleChange} errors={errors} />
      <hr />
      <Email values={values} handleChange={handleChange} errors={errors} />
      <Checkbox handleChange={handleChange} errors={errors} />
      <button className='form__btn' type='submit'>
        Отправить
      </button>
      <p className='form__date-caption'>
        {Object.keys(errors).length === 0 && getDate()}
      </p>
    </form>
  );
};

export default Form;
