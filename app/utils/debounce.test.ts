import { debounce } from './debounce';

describe('debounce', () => {
  const mockFunction = vi.fn();

  beforeEach(() => {
    vi.useFakeTimers();
    mockFunction.mockClear();
    vi.clearAllTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should debounce the function correctly', () => {
    const debouncedFn = debounce(mockFunction, 100);

    debouncedFn();
    debouncedFn();
    debouncedFn();

    vi.advanceTimersByTime(100);

    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  it('should cancel the previous debounce when called again within the delay', () => {
    const debouncedFn = debounce(mockFunction, 200);

    debouncedFn();

    vi.advanceTimersByTime(100);

    setTimeout(() => {
      debouncedFn();
    }, 100);

    vi.advanceTimersByTime(200);

    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  it('should pass the correct arguments to the debounced function', () => {
    const debouncedFn = debounce(mockFunction, 100);

    debouncedFn(1, 'foo');

    vi.advanceTimersByTime(100);

    expect(mockFunction).toHaveBeenCalledWith(1, 'foo');
  });
});
