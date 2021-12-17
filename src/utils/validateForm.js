export default function validateForm(values) {
  let errors = {};
  if (!values.email) {
    errors.email = 'Укажите E-mail';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Неверный E-mail';
  }
  if (!values.password) {
    errors.password = 'Укажите пароль';
  } else if (values.password.length < 5) {
    errors.password = 'Используйте не менее 5 символов';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Укажите пароль';
  }
  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Пароли не совпадают';
    console.log('Пароли не совпадают');
  }

  if (values.city === 'Выберите город') {
    errors.cityError = 'Пожалуйста, выберите город из списка.';
  }
  return errors;
}
