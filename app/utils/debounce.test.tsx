import { debounce } from './debounce';

const mockFunction = jest.fn();

jest.useFakeTimers();

describe('debounce', () => {
  beforeEach(() => {
    mockFunction.mockClear();
    jest.clearAllTimers();
  });

  it('should debounce the function correctly', () => {
    const debouncedFn = debounce(mockFunction, 100);

    debouncedFn();
    debouncedFn();
    debouncedFn();

    jest.advanceTimersByTime(100);

    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  it('should cancel the previous debounce when called again within the delay', () => {
    const debouncedFn = debounce(mockFunction, 200);

    debouncedFn();

    setTimeout(() => {
      debouncedFn();
    }, 100);

    jest.advanceTimersByTime(200);

    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  it('should pass the correct arguments to the debounced function', () => {
    const debouncedFn = debounce(mockFunction, 100);

    debouncedFn(1, 'foo');

    jest.advanceTimersByTime(100);

    expect(mockFunction).toHaveBeenCalledWith(1, 'foo');
  });
});
