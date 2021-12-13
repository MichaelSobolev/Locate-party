import styles from './styles.module.css';

export const Button = ({type = 'button', className = '', view = 'contained', size = 'm', children}) => (
    <button className={`${styles.button} ${styles[`button_size_${size}`]} ${styles[`button_view_${view}`]} ${className}`} type={type}>{children}</button>
);
