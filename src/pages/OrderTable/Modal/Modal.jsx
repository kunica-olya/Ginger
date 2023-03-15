import {Component} from "react";
import {ModalView} from "./ModalView";
import ButtonView from "../../../class_components/Button/ButtonView";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus, faXmark} from '@fortawesome/free-solid-svg-icons';

export class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpenModal: false
        }
    }

    toggleModal = () => {
        this.setState(prevState => ({
            isOpenModal: !prevState.isOpenModal
        }))
    }

    render() {
        const {isOpenModal} = this.state;
        return (
            <>
                <ButtonView click={(e) => this.toggleModal(e)}
                            text={'Add'}
                >
                    <FontAwesomeIcon icon={faPlus}/>
                </ButtonView>
                <div>
                    {isOpenModal && <ModalView
                        close={this.toggleModal}
                    >
                        <FontAwesomeIcon icon={faXmark}/>
                    </ModalView>
                    }
                </div>
            </>
        )
    }
}