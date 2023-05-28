import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import ModalView from './ModalView';
import ButtonView from '../../../components/Button/ButtonView';
import { BUTTON } from '../../../constants/constants';
import useModal from '../../../custom_hooks/useModal';

export default function Modal({ handlerAddData }) {
  const { t } = useTranslation();

  const { isOpen, toggleModal } = useModal();
  const [newOrder, setNewOrder] = useState(
    {
      id: '',
      firstName: '',
      lastName: '',
      productName: '',
      productPrice: '',
      productAmount: ''
    }
  );

  Modal.propTypes = {
    handlerAddData: PropTypes.func.isRequired
  };

  const handlerOnChange = (e) => {
    const { id, value } = e.target;

    setNewOrder((prevNewOrder) => ({
      ...prevNewOrder, [id]: value
    }));
  };

  const submitForm = (e) => {
    const {
      id,
      firstName,
      lastName,
      productName,
      productPrice,
      productAmount
    } = newOrder;

    e.preventDefault();
    const formattedData = {
      orderId: '2000005',
      customer: {
        id,
        name: {
          firstName,
          lastName
        },
        phone: '0994905678',
        address: {
          street: 'Murakami',
          home: '7',
          flat: '10'
        }
      },
      products: [
        {
          id: 1,
          name: 'Currant zephyr',
          price: 25,
          currency: '₴',
          amount: 6
        },
        {
          id: 2,
          name: 'Currant zephyr',
          price: 25,
          currency: '₴',
          amount: 15
        },
        {
          id: +id,
          name: productName,
          price: +productPrice,
          currency: '₴',
          amount: +productAmount
        }
      ]
    };
    handlerAddData(formattedData);
  };

  return (
    <>
      <ButtonView
        click={toggleModal}
        text={t('orderTablePage.buttonAdd')}
        variant={BUTTON.ADD}
      >
        <FontAwesomeIcon icon={faPlus} />
      </ButtonView>
      <div>
        {isOpen && (
        <ModalView
          close={toggleModal}
          changeInput={handlerOnChange}
          formReady={submitForm}
        >
          <FontAwesomeIcon icon={faXmark} />
        </ModalView>
        )}
      </div>
    </>
  );
}
