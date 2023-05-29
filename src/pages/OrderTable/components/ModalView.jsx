import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import styles from '../sass/Modal.module.scss';
import ButtonView from '../../../components/Button/ButtonView';
import { BUTTON } from '../../../constants/constants';
import CustomInputView from './CustomInputView';

export default function ModalView({
  children,
  close,
  changeInput,
  formReady
}) {
  const { t } = useTranslation();

  return (
    <div className={styles['modal-window']}>
      <div className={styles['modal-content']} />
      <button
        type="button"
        onClick={close}
        className={styles['close-icon']}
      >
        {children}
      </button>
      <h2>{t('orderTablePage.modalTitle')}</h2>
      <form>
        <div className={styles.row}>
          <div className={styles.column}>
            <CustomInputView
              label="ID"
              id="id"
              changeInput={changeInput}
            />

            <CustomInputView
              label={t('orderTablePage.modalFirstName')}
              id="firstName"
              changeInput={changeInput}
            />

            <CustomInputView
              label={t('orderTablePage.modalLastName')}
              id="lastName"
              changeInput={changeInput}
            />
          </div>
          <div className={styles.column}>
            <CustomInputView
              label={t('orderTablePage.modalProduct')}
              id="productName"
              changeInput={changeInput}
            />

            <CustomInputView
              label={t('orderTablePage.modalPrice')}
              id="productPrice"
              changeInput={changeInput}
            />

            <CustomInputView
              label={t('orderTablePage.modalAmount')}
              id="productAmount"
              changeInput={changeInput}
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <ButtonView
            text={t('orderTablePage.modalButtonCancel')}
            click={close}
            variant={BUTTON.CANCEL}
            className="different"
          />
          <ButtonView
            text={t('orderTablePage.modalButtonSave')}
            click={formReady}
            variant={BUTTON.SAVE}
          />
        </div>
      </form>
    </div>
  );
}

ModalView.propTypes = {
  close: PropTypes.func.isRequired,
  changeInput: PropTypes.func.isRequired,
  formReady: PropTypes.func.isRequired,
  children: PropTypes.element
};

ModalView.defaultProps = {
  children: null,
};
