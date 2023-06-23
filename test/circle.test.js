const Circle = require('../lib/circle');

test('creates shape and fills it with a color', () => {
  const test = new Circle('blue')

  expect(test.color).toBe('blue');
});

test('setcolor method changes color', () => {
  const test = new Circle('blue')
test.setColor('red')
  expect(test.color).toBe('red');
});
test('tests render method', () => {
  const test = new Circle('blue')
const control = `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
  expect(test.render()).toBe(control);
});

