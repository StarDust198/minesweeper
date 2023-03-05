import styles from './cellComponent.module.css';

// 'open' | 'closed' | 'marked' | 'question' | 'questionOpen' | 'mine' | 'mineBlown' | 'mineFalse' | 'number'
export const CellComponent = ({ status = 'closed', value = 1 }) => {
  const clazz = status === 'number' ? `number-${value}` : status;

  return <div className={styles[clazz]} />;
};
