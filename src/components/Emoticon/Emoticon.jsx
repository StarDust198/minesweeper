import cn from 'classnames';

import styles from './emoticon.module.css';

export const Emoticon = ({ mood = 'push' }) => {
  return <div className={cn(styles.emoticon, styles[mood])} />;
};
