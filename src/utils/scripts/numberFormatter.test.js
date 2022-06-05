import numberFormatter from './numberFormatter';

describe('Correct Turkish Number Formatting', () => {
  test('Returns a string of a number with proper Turkish number format', () => {
    expect(numberFormatter(3000000)).toBe('3.000.000');
  });
});
