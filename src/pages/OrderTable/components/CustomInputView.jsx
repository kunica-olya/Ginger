import PropTypes from 'prop-types';
import styles from '../sass/CustomInput.module.scss';

export default function CustomInputView({
  label,
  id,
  changeInput
}) {
  return (
    <div className={styles.column}>
      <label className={styles.label} htmlFor={id}>{label}</label>
      <input className={styles.input} onChange={changeInput} id={id} type="text" />
    </div>
  );
}

CustomInputView.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  changeInput: PropTypes.func
}.isRequired;
