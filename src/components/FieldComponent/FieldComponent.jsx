import { Fragment } from 'react';

import { CellComponent } from '../CellComponent/CellComponent';

import styles from './fieldComponent.module.css';

export const FieldComponent = ({ field, setField, setMood }) => {
  const onClick = (y, x) => {
    if (field.cells[y][x].marked !== 1) {
      field.openPos(y, x);
      setMood('play');
      setField(field.getCopyField());
    }
  };

  const onContextMenu = (e, y, x) => {
    e.preventDefault();
    field.markPos(y, x);
    setField(field.getCopyField());
  };

  return (
    <div className={styles.field}>
      {field.cells.map((row, i) => (
        <Fragment key={i}>
          {row.map((cell) => (
            <CellComponent
              key={`y${cell.y}x${cell.x}`}
              open={cell.open}
              onContextMenu={(e) => onContextMenu(e, cell.y, cell.x)}
              onClick={() => onClick(cell.y, cell.x)}
              count={cell.count}
              mine={cell.mine}
              marked={cell.marked}
              setMood={setMood}
              gameStatus={field.gameStatus}
              special={cell.special}
            />
          ))}
        </Fragment>
      ))}
    </div>
  );
};
