const width = 300;
const height = 300;

export class Clock {
  constructor(date, p5) {
    this.centerX = width / 2 - 50;
    this.centerY = height / 2 - 50;
    this.radius = p5.min(width, height) * 0.3 / 2;
    this.date = date || new Date();
    this.p5 = p5;
  }

  mostrar() {
    // Draw the circumference of the clock
    this.drawCircumference();

    // Get the coordinates for the hands
    let hours = this.p5.map(this.date.getHours() % 12, 0, 12, 0, this.p5.TWO_PI) - this.p5.HALF_PI;
    let minutes = this.p5.map(this.date.getMinutes(), 0, 60, 0, this.p5.TWO_PI) - this.p5.HALF_PI;
    let seconds = this.p5.map(this.date.getSeconds(), 0, 60, 0, this.p5.TWO_PI) - this.p5.HALF_PI;

    // Draw the hands
    this.drawHand(hours, this.radius * 0.5, 5);
    this.drawHand(minutes, this.radius * 0.7, 3);
    this.drawHand(seconds, this.radius * 0.8, 1);
    this.showCurrentTime();
  }

  // Show the current time in the center of the clock
  showCurrentTime() {
    this.p5.textSize(20);
    this.p5.textAlign(this.p5.CENTER, this.p5.CENTER);
    this.p5.text(this.date.toLocaleTimeString(), this.centerX, this.centerY + this.radius + 20);
  }

  // Draw the circumference of the clock
  drawCircumference() {
    let x = 0;
    let y = this.radius;
    let p = 1 - this.radius;

    while (x <= y) {
      this.paintSymmetrically(x, y);
      if (p < 0) {
        p += 2 * x + 3;
      } else {
        p += 2 * (x - y) + 5;
        y--;
      }
      x++;
    }
  }

  // Paint symmetrically the circumference of the clock by midpoints
  paintSymmetrically(x, y) {
    this.p5.point(this.centerX + x, this.centerY + y);
    this.p5.point(this.centerX - x, this.centerY + y);
    this.p5.point(this.centerX + x, this.centerY - y);
    this.p5.point(this.centerX - x, this.centerY - y);
    this.p5.point(this.centerX + y, this.centerY + x);
    this.p5.point(this.centerX - y, this.centerY + x);
    this.p5.point(this.centerX + y, this.centerY - x);
    this.p5.point(this.centerX - y, this.centerY - x);
  }

  // Draw a hand of the clock
  drawHand(angle, longitude, thickness) {
    let x = this.centerX + this.p5.cos(angle) * longitude;
    let y = this.centerY + this.p5.sin(angle) * longitude;
    this.p5.strokeWeight(thickness);
    this.p5.line(this.centerX, this.centerY, x, y);
    // this.drawLine(this.centerX, this.centerY, x, y);
  }

  // Draw a line between two points for the hand of the clock
  drawLine(x1, y1, x2, y2) {
    let m = (y2 - y1) / (x2 - x1);
    let b = y1 - m * x1;
    for (let x = x1; x <= x2; x++) {
      let y = m * x + b;
      this.p5.point(x, y);
    }
  }
}
