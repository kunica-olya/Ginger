import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import styles from '../sass/ButtonRemove.module.scss';

export default function ButtonRemoveView({ click }) {
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

ButtonRemoveView.propTypes = {
  click: PropTypes.func.isRequired
};
