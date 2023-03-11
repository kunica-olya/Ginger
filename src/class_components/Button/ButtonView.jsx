import {Component} from 'react';
import {ReactComponent as IconBag} from "../../assets/svg/bag.svg";
import {ReactComponent as IconInstagram} from "../../assets/svg/instagram.svg";
import styles from './Button.module.scss';

export default class ButtonView extends Component {

    render() {
        const {text, click} = this.props;

        return (
            <button onClick={click} className={styles['button-buy']}>
                {text === "Subscribe" && <IconInstagram/>}
                {text === "Buy" && <IconBag/>}
                <span className={styles['button-text']}>{text}</span>
            </button>
        )
    }
}