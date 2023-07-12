import operate from '../components/logic/operate';

describe('testing mathematical operations', () => {
  test('addition test', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });

  test('subtraction test', () => {
    expect(operate(4, 2, '-')).toBe('2');
  });

  test('multiplication test', () => {
    expect(operate(5, 3, 'x')).toBe('15');
  });

  test('division test', () => {
    expect(operate(20, 4, '÷')).toBe('5');
  });

  test('mod test', () => {
    expect(operate(14, 3, '%')).toBe('2');
  });
});
