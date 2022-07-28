import { useEffect, useRef, useState } from "react";

function useThrottle<T>(value: T, interval = 500): T {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const lastExecuted = useRef<number>(Date.now());

  useEffect(() => {
    //IF DIFFERENCE BETWEEN LAST CALL IS GREATER THAN INTERVAL
    if (Date.now() >= lastExecuted.current + interval) {
      lastExecuted.current = Date.now();
      setThrottledValue(value);
    }
    //IF CALLED TOO EARLY BEFORE THE INTERVAL
    else {
      const timerId = setTimeout(() => {
        lastExecuted.current = Date.now();
        setThrottledValue(value);
      }, interval);

      return () => clearTimeout(timerId);
    }
  }, [value, interval]);

  return throttledValue;
}
export default useThrottle;
