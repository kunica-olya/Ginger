import {ModalView} from "./ModalView";
import {ButtonView} from "../../../components/Button/ButtonView";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus, faXmark} from '@fortawesome/free-solid-svg-icons';
import {BUTTON} from "../../../constants/constants";
import {useState} from "react";
import {useModal} from "../../../custom_hooks/useModal";

export const Modal = ({handlerAddData}) => {

    const {isOpen, toggleModal} = useModal();
    const [newOrder, setNewOrder] = useState(
        {
            id: '',
            firstName: '',
            lastName: '',
            productName: '',
            productPrice: '',
            productAmount: ''
        }
    )


    const handlerOnChange = (e) => {
        const {id, value} = e.target;
        setNewOrder({...newOrder, [id]: value})
    }


    const submitForm = (e) => {

        const {
            id,
            firstName,
            lastName,
            productName,
            productPrice,
            productAmount
        } = newOrder


        e.preventDefault()
        const formattedData = {
            "orderId": '2000005',
            "customer": {
                id,
                "name": {
                    firstName,
                    lastName
                },
                "phone": "0994905678",
                "address": {
                    "street": "Murakami",
                    "home": "7",
                    "flat": "10"
                }
            },
            "products": [
                {
                    "id": 1,
                    "name": "Currant zephyr",
                    "price": 25,
                    "currency": "₴",
                    "amount": 6
                },
                {
                    "id": 2,
                    "name": "Currant zephyr",
                    "price": 25,
                    "currency": "₴",
                    "amount": 15
                },
                {
                    "id": 3,
                    "name": productName,
                    "price": productPrice,
                    "currency": "₴",
                    "amount": productAmount
                }
            ]
        }
        handlerAddData(formattedData)
    }


    return (
        <>
            <ButtonView click={toggleModal}
                        text={'Add'}
                        variant={BUTTON.ADD}
            >
                <FontAwesomeIcon icon={faPlus}/>
            </ButtonView>
            <div>
                {isOpen &&
                <ModalView close={toggleModal}
                           changeInput={handlerOnChange}
                           formReady={submitForm}>
                    <FontAwesomeIcon icon={faXmark}/>
                </ModalView>
                }
            </div>
        </>
    )
}