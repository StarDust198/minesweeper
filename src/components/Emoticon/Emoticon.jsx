import { useState } from 'react';
import cn from 'classnames';

import styles from './emoticon.module.css';

export const Emoticon = ({ mood = 'play', onClick }) => {
  const [pushed, setPushed] = useState(false);

  return (
    <div
      className={cn(styles.emoticon, {
        [styles[mood]]: !pushed,
        [styles.push]: pushed,
      })}
      onClick={onClick}
      onMouseDown={() => setPushed(true)}
      onMouseUp={() => setPushed(false)}
      onMouseOut={() => setPushed(false)}
    />
  );
};
