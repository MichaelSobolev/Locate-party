import {useMemo, useState, useEffect, useRef} from 'react';

import styles from './styles.module.css';

export const Input = ({
  id: idProp,
  name,
  value: valueProp,
  type,
  handleChange: onChange,
  min = "",
  max = "",
  className = '',
  label,
  placeholder = ' ',
  size = 'm',
  options = [],
}) => {
  const id = useMemo(() => idProp ?? Math.random().toString(36));
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [value, setValue] = useState(valueProp);
  const inputEl = useRef(null);

  const handleChange = (event) => {
    setValue(event.target.value);

    if (onChange) {
      onChange(event);
    }
  }

  const handleFocus = () => {
    setIsOptionsVisible(true);
  };

  const createOptionClickHandler = (value) => () => {
    setValue(value);

    setIsOptionsVisible(false);
  }

  useEffect(() => {
    const handleDocumentBodyClick = (event) => {
      if (event.target.closest(`.${styles.input}`) === inputEl.current) {
        return;
      }

      setIsOptionsVisible(false);
    }

    const handleDocumentBodyFocus = (event) => {
      if (event.target.closest(`.${styles.input}`) === inputEl.current) {
        return;
      }

      setIsOptionsVisible(false);
    }

    document.body.addEventListener('click', handleDocumentBodyClick);
    document.body.addEventListener('focus', handleDocumentBodyFocus, true);

    return () => {
      document.body.removeEventListener('click', handleDocumentBodyClick);
      document.body.removeEventListener('focus', handleDocumentBodyFocus)
    }
  }, [inputEl])

  useEffect(() => {
    setValue(valueProp);
  }, [valueProp]);

  return (
    <span key={id} ref={inputEl} className={`${styles.input} ${styles[`input_size_${size}`]} ${className}`}>
      <input
        className={`${styles['input__control']} ${label ? styles['input__control_with-label'] : ''} ${options.length > 0 && isOptionsVisible ? styles['input__control_options-visible'] : ''}`}
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        name={name}
        min={min}
        max={max}
        placeholder={placeholder}
      />
      {label && <label className={styles['input__label']} htmlFor={id}>{label}</label>}
      {isOptionsVisible && options.length > 0 && (
        <ul className={styles['input__option-list']}>
          {options.map(({text, value}) => (
              <li key={value} className={styles['input__option-list-item']}>
                  <button className={styles['input__option-list-item-button']} type="button" onClick={createOptionClickHandler(value)}>{text}</button>
              </li>
          ))}
        </ul>
      )}
    </span>
  );
};
