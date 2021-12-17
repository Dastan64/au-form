export default function getDate() {
  const monthNames = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  let date = new Date();
  let msg = `последние изменения ${date.getDate()} ${
    monthNames[date.getMonth()]
  } ${date.getFullYear()} в ${date.toLocaleTimeString()}`;
  return msg;
}
