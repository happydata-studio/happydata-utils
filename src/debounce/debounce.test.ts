// debounce.test.ts
import { debounce } from './debounce';

jest.useFakeTimers();

describe('debounce', () => {
    let func: jest.Mock;

    beforeEach(() => {
        func = jest.fn();
    });

    it('should call the debounced function after the specified wait time', () => {
        const debouncedFunc = debounce(func, 200);

        debouncedFunc();
        expect(func).not.toHaveBeenCalled();

        jest.advanceTimersByTime(200);
        expect(func).toHaveBeenCalledTimes(1);
    });

    it('should not call the debounced function before the specified wait time', () => {
        const debouncedFunc = debounce(func, 200);

        debouncedFunc();
        expect(func).not.toHaveBeenCalled();

        jest.advanceTimersByTime(100);
        expect(func).not.toHaveBeenCalled();

        jest.advanceTimersByTime(100);
        expect(func).toHaveBeenCalledTimes(1);
    });

    it('should call the debounced function only once if called multiple times within the wait time', () => {
        const debouncedFunc = debounce(func, 200);

        debouncedFunc();
        debouncedFunc();
        debouncedFunc();

        jest.advanceTimersByTime(200);
        expect(func).toHaveBeenCalledTimes(1);
    });

    it('should call the debounced function with the correct arguments', () => {
        const debouncedFunc = debounce(func, 200);

        debouncedFunc(1, 2, 3);
        jest.advanceTimersByTime(200);
        expect(func).toHaveBeenCalledWith(1, 2, 3);
    });

    it('should call the debounced function with the correct this context', () => {
        const obj = {
            value: 42,
            func: function() {
                return this.value;
            },
        };

        jest.spyOn(obj, 'func');
        const debouncedFunc = debounce(obj.func, 200);

        debouncedFunc.call(obj);
        jest.advanceTimersByTime(200);
        expect(obj.func).toHaveBeenCalled();
        expect(obj.func).toHaveReturnedWith(42);
    });
});
