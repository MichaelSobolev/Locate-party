import styles from './styles.module.css';

export const Video = ({ source }) => (
  <video className={styles.video} width="100%" height="auto" autoPlay={true} muted={true} loop>
    <source src={source} />
  </video>
);
