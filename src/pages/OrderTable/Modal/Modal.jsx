import {Component} from "react";
import {ModalView} from "./ModalView";
import {ButtonView} from "../../../components/Button/ButtonView";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus, faXmark} from '@fortawesome/free-solid-svg-icons';
import {BUTTON} from "../../../constants/constants";

export class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpenModal: false,
            newOrder: {
                id: '',
                firstName: '',
                lastName: '',
                productName: '',
                productPrice: '',
                productAmount: ''
            }
        }
    }

    toggleModal = () => {
        this.setState(prevState => ({
            isOpenModal: !prevState.isOpenModal
        }))
    }

    handlerOnChange = (e) => {
        this.setState(({newOrder}) => ({
            newOrder: {
                ...newOrder,
                [e.target.id]: e.target.value
            }
        }))
    }

    submitForm = (e) => {
        const {
            id,
            firstName,
            lastName,
            productName,
            productPrice,
            productAmount
        } = this.state.newOrder

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
        this.props.handlerAddData(formattedData)
    }

    render() {
        const {isOpenModal} = this.state;
        return (
            <>
                <ButtonView click={this.toggleModal}
                            text={'Add'}
                            variant={BUTTON.ADD}
                >
                    <FontAwesomeIcon icon={faPlus}/>
                </ButtonView>
                <div>
                    {isOpenModal && <ModalView
                        close={this.toggleModal}
                        changeInput={this.handlerOnChange}
                        formReady={this.submitForm}
                    >
                        <FontAwesomeIcon icon={faXmark}/>
                    </ModalView>
                    }
                </div>
            </>
        )
    }
}