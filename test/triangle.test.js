const Triangle = require('../lib/triangle');

test('creates shape and fills it with a color', () => {
  const test = new Triangle('blue')

  expect(test.color).toBe('blue');
});

test('setcolor method changes color', () => {
  const test = new Triangle('blue')
test.setColor('red')
  expect(test.color).toBe('red');
});
test('tests render method', () => {
  const test = new Triangle('blue')
const control = `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`
  expect(test.render()).toBe(control);
});

