import styles from './Button.module.scss';

export default function ButtonView({
  text,
  click,
  children,
  variant,
  className
}) {
  return (
    <button
      type="button"
      onClick={click}
      className={`${styles.button} ${styles[variant]}
            ${className ? styles[className] : ''}`}
    >
      {children}
      <span className={styles['button-text']}>{text}</span>
    </button>
  );
}
