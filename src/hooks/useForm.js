import { useEffect, useState } from 'react';

import validateForm from '../utils/validateForm';

const useForm = () => {
  const [values, setValues] = useState({
    city: 'Выберите город',
    password: '',
    confirmPassword: '',
    email: '',
    checkboxState: 'off',
  });

  const [errors, setErrors] = useState({
    password: '',
    confirmPassword: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(values));
    console.log(JSON.stringify(values));
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      alert('Данные формы были успешно отправлены');
    }
  }, [errors]);
  return { values, handleChange, handleSubmit, errors };
};

export default useForm;
