import { useState } from 'react';
import cn from 'classnames';

import styles from './cellComponent.module.css';

// 'open' | 'closed' | 'marked' | 'question' | 'questionOpen' | 'mine' | 'mineBlown' | 'mineFalse' | 'number'
export const CellComponent = ({
  open = false,
  count = null,
  marked = 0,
  mine = false,
  special = null,
  onClick,
  onContextMenu,
  setMood,
  gameStatus,
}) => {
  const [pushed, setPushed] = useState(false);

  const onMouseDown = (e) => {
    if (gameStatus !== 2 && e.buttons === 1 && !open && marked !== 1) {
      setPushed(true);
      setMood('hold');
    }
  };

  const onMouseOut = () => {
    if (gameStatus !== 2 && !open && marked !== 1) {
      setPushed(false);
      setMood('play');
    }
  };

  const onMouseUp = (e) => {
    if (e.button === 0) {
      onMouseOut();
      onClick();
    }
  };

  const clazz = {
    [styles.closed]: !open && marked === 0 && !pushed,
    [styles.open]: (open && count === 0) || (!open && pushed && marked !== 2),
    [styles.marked]: !open && marked === 1,
    [styles.question]: !open && marked === 2,
    [styles.questionOpen]: !open && pushed && marked === 2,
    [styles[`number-${count}`]]: open && count !== null && count !== 0,
    [styles.mine]: gameStatus > 1 && mine,
    [styles.mineFalse]: gameStatus === 2 && marked === 1 && !mine,
    [styles.mineBlown]: special === 'mineBlown',
  };

  return (
    <div
      className={cn(clazz)}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseEnter={onMouseDown}
      onMouseOut={onMouseOut}
      onContextMenu={onContextMenu}
    />
  );
};
