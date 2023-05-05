import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import styles from './ButtonRemoveView.module.scss';

export default function ButtonRemoveView({ click }) {
  ButtonRemoveView.propTypes = {
    click: PropTypes.func.isRequired
  };

  return (
    <button
      type="button"
      onClick={click}
      className={styles['button-remove']}
    >
      <FontAwesomeIcon icon={faTrash} />
    </button>
  );
}
