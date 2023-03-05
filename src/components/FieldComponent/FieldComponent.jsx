import { CellComponent } from '../CellComponent/CellComponent';

import styles from './fieldComponent.module.css';

export const FieldComponent = () => {
  return (
    <div className={styles.field}>
      {Array(16 * 16)
        .fill(<></>)
        .map((item, i) => (
          <CellComponent key={i} />
        ))}
    </div>
  );
};
