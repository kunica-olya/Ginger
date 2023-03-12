import {Component} from 'react';
import styles from './Button.module.scss';

export default class ButtonView extends Component {

    render() {
        const {text, click, children, width} = this.props;


        return (
            <button onClick={click} style={{width}} className={styles['button-buy']}>
                {children}
                <span className={styles['button-text']}>{text}</span>
            </button>
        )
    }
}