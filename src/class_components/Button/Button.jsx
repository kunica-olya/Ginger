import {Component} from 'react';
import {ReactComponent as Icon} from "../../assets/svg/basket-shopping.svg";
import styles from './Button.module.scss';


export default class Button extends Component {

    render() {
        const {text} = this.props;

        return (
            <button className={styles['button-buy']}>
                <Icon/>
                <span className={styles['button-text']}>{text}</span>
            </button>
        )
    }
}