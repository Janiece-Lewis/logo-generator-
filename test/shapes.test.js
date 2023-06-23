const Shapes = require('../lib/shapes')

// tests shape and shape color
test('creates shape and fills it with a color', () => {
    const test = new Shapes('blue')

    expect(test.color).toBe('blue');
});

test('setcolor method changes color', () => {
    const test = new Shapes('blue')
 test.setColor('red')
    expect(test.color).toBe('red');
});