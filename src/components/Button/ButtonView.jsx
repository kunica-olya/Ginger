import PropTypes from 'prop-types';
import styles from './Button.module.scss';

export default function ButtonView({
  text,
  click,
  children,
  variant,
  className
}) {
  ButtonView.propTypes = {
    text: PropTypes.string.isRequired,
    click: PropTypes.func,
    children: PropTypes.element,
    className: PropTypes.string,
    variant: PropTypes.string.isRequired
  };

  ButtonView.defaultProps = {
    click: () => {},
    className: '',
    children: ''
  };

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
