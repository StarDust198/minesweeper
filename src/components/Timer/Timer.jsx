import { useState, useEffect, useRef } from 'react';

import { Counter } from '../Counter/Counter';

export const Timer = ({ status }) => {
  const [time, setTime] = useState(0);
  const timer = useRef();

  useEffect(() => {
    if (timer.current) {
      clearInterval(timer.current);
    }
    const callback = () => {
      if (time < 999) {
        setTime((x) => x + 1);
      } else {
        clearInterval(timer.current);
      }
    };
    if (status === 1) {
      timer.current = setInterval(callback, 1000);
    } else if (status === 0) {
      setTime(0);
    }
    // eslint-disable-next-line
  }, [status]);

  return <Counter count={time} />;
};
