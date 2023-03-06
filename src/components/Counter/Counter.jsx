import { NumberSign } from '../NumberSign/NumberSign';

import styles from './counter.module.css';

export const Counter = ({ count }) => {
  const nums = count.toString().padStart(3, '0');

  return (
    <div className={styles.counter}>
      <NumberSign value={nums[0]} />
      <NumberSign value={nums[1]} />
      <NumberSign value={nums[2]} />
    </div>
  );
};
