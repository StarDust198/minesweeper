import cn from 'classnames';

import styles from './numberSign.module.css';

export const NumberSign = ({ value }) => {
  const clazz = 'number-' + value;

  return (
    <div
      className={cn(styles.numberSign, {
        [styles[clazz]]: true,
      })}
    ></div>
  );
};
