export const generateCitiesText = () => {
  return window.dates
    .map(date => date.city)
    .map(city => {
      const div = document.createElement('div');
      div.classList.add('city');
      div.textContent = city;
      return div;
    });
};