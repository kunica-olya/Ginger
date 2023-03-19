import {Component} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import styles from './ButtonRemove.module.scss'

export class ButtonRemoveView extends Component {

    render() {
        const {click} = this.props
        return (
            <button onClick={click} className={styles['button-remove']}>
                <FontAwesomeIcon icon={faTrash}/>
            </button>
        )
    }

}