import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from './ButtonRemoveView.module.scss';

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
