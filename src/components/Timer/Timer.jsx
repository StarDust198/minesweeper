import { useState, useEffect, useRef } from 'react';

import { Counter } from '../Counter/Counter';

export const Timer = ({ restart }) => {
  const [time, setTime] = useState(0);
  const timer = useRef();

  useEffect(() => {
    if (timer.current) {
      clearInterval(timer.current);
    }
    const callback = () => setTime((x) => x + 1);
    timer.current = setInterval(callback, 1000);

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return <Counter count={time} />;
};
