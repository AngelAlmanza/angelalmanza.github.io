import { Clock } from "../Clock";

export const clockSketch = (p5) => {
  let clock;
  let date;

  if (window.currentDate > window.dates.length) {
    return;
  }

  date = window.dates[window.currentDate - 1].dateObject;

  const updateDateClock = () => {
    clock.date.setSeconds(clock.date.getSeconds() + 1);
  };

  p5.setup = () => {
    p5.createCanvas(200, 200);
    p5.stroke(255);

    clock = new Clock(date, p5);
    setInterval(updateDateClock, 1000);
    window.currentDate++;
  };

  p5.draw = () => {
    p5.background(10);
    clock.mostrar();
    p5.push();
    p5.pop();
  };
}