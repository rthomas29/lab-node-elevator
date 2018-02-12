class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.startId = 0;
  }
  start() {
    this.startId = setInterval(() => this.update(), 1000);
  }
  stop() {
    clearInterval(this.startId);
  }
  update() {
    this.log();
  }
  _passengersEnter() {}
  _passengersLeave() {}
  floorUp() {
    this.floor + 1 < this.MAXFLOOR ? this.floor++ : this.floor;
    const status = `Going up to ${this.floor}`;
    return status;
  }
  floorDown() {
    this.floor - 1 > 0 ? this.floor-- : this.floor;
    const status = `Going down to ${this.floor}`;
  }
  call() {}
  log() {
    return `Loggin direction and floor`;
  }
}

module.exports = Elevator;
