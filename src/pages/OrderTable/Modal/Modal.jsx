import {Component} from "react";
import {ModalView} from "./ModalView";
import ButtonView from "../../../class_components/Button/ButtonView";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus, faXmark} from '@fortawesome/free-solid-svg-icons';

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
        this.setState({
            newOrder: {
                ...this.state.newOrder,
                [e.target.id]: e.target.value
            }
        })
    }

    submitForm = (e) => {
        e.preventDefault()
        const formattedData = {
            "orderId": '2000005',
            "customer": {
                "id": this.state.newOrder.id,
                "name": {
                    "firstName": this.state.newOrder.firstName,
                    "lastName": this.state.newOrder.lastName
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
                    "name": this.state.newOrder.productName,
                    "price": this.state.newOrder.productPrice,
                    "currency": "₴",
                    "amount": this.state.newOrder.productAmount
                }
            ]
        }
        this.props.handlerAddData(formattedData)
    }

    render() {
        const {isOpenModal} = this.state;
        return (
            <>
                <ButtonView click={(e) => this.toggleModal(e)}
                            text={'Add'}
                            width='130px'
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