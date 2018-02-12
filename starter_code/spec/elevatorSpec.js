const Elevator = require('../elevator');

describe('Elevator class', function() {
  it('should create a new instance of Elevator', function() {
    const el = new Elevator();
    expect(el).toEqual(jasmine.any(Elevator));
  });
  it('should have methods to start and stop elevator, named start and stop', function() {
    const el = new Elevator();
    expect(el.start);
    expect(el.stop);
  });
  it('should have method to update status of elevator, called update', function() {
    const el = new Elevator();
    expect(el.update);
  });
  it('should have a log function', function() {
    const el = new Elevator();
    expect(el.log);
  });
});
