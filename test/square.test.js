const Square = require('../lib/square');


test('creates shape and fills it with a color', () => {
  const test = new Square('blue')

  expect(test.color).toBe('blue');
});

test('setcolor method changes color', () => {
  const test = new Square('blue')
test.setColor('red')
  expect(test.color).toBe('red');
});
test('tests render method', () => {
  const test = new Square('blue')
const control = `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
  expect(test.render()).toBe(control);
});

