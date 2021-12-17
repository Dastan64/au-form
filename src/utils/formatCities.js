import cities from '../cities.json';

export const formatCities = () => {
  return Array.from(cities)
    .sort((cityA, cityB) => {
      let cityAName = cityA.city.toLowerCase();
      let cityBName = cityB.city.toLowerCase();
      return cityAName < cityBName ? -1 : 1;
    })
    .filter((city) => city.population > 50000);
};

export const biggestCity = () => {
  let biggest = 0;

  for (let index = 0; index < cities.length; index++) {
    const element = cities[index];
    if (+element.population > biggest) {
      biggest = +element.population;
    }
  }

  const biggestCity = cities.find((item) => +item.population === biggest);
  return biggestCity;
};
