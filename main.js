import './style.css';
import { clockSketch } from './src/sketches/Clock';
import { getDates } from './src/getDates';
import { generateCitiesText } from './src/generateCitiesText';

const APP = document.querySelector('#app');
const APP2 = document.querySelector('#app2');
const APP3 = document.querySelector('#app3');
const inputTime = document.querySelector('#time');
const CITIES = document.querySelector('#cities');

inputTime.addEventListener('change', (event) => {
  const hours = event.target.value.split(':')[0];
  const minutes = event.target.value.split(':')[1];
  const date = new Date();

  date.setHours(hours);
  date.setMinutes(minutes);
  window.dates = getDates(date);
  window.currentDate = 1;
  APP.innerHTML = '';
  APP2.innerHTML = '';
  APP3.innerHTML = '';
  CITIES.innerHTML = '';

  new p5(clockSketch, APP);
  new p5(clockSketch, APP2);
  new p5(clockSketch, APP3);

  generateCitiesText().forEach(city => CITIES.appendChild(city));

});
