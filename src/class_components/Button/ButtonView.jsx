import {Component} from 'react';
import {ReactComponent as Icon} from "../../assets/svg/bag.svg";
import styles from './Button.module.scss';

export default class ButtonView extends Component {

    render() {
        const {text, click} = this.props;

        return (
            <button onClick={click} className={styles['button-buy']}>
                <Icon/>
                <span className={styles['button-text']}>{text}</span>
            </button>
        )
    }
}