class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval;{() => {
      this.currentTime++;}
    1000};
  }

  getMinutes() {
    let currentTimeMin = Math.floor(this.currentTime / 60);
    return currentTimeMin;
  }

  getSeconds() {
    let currentTimeSec = this.currentTime/60;
    return currentTimeSec;
  }

  computeTwoDigitNumber(value) {
    return ("0" + num).slice(-2);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;

  }

  split() {
    let minutes = this.twoDigitsNumber(this.getMinutes());
    let seconds = this.twoDigitsNumber(this.getSeconds());
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
