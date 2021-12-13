import {useMemo} from 'react';

import styles from './styles.module.css';

export const Input = ({
  id: idProp,
  name,
  value,
  type,
  handleChange,
  min = "",
  max = "",
  className = '',
  label,
  placeholder = ' ',
  size = 'm',
}) => {
  const id = useMemo(() => idProp ?? Math.random().toString(36));

  return (
    <span key={id} className={`${styles.input} ${styles[`input_size_${size}`]} ${className}`}>
      <input
        className={styles['input__control']}
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
        name={name}
        min={min}
        max={max}
        placeholder={placeholder}
      />
      {label && <label className={styles['input__label']} htmlFor={id}>{label}</label>}
    </span>
  );
};
