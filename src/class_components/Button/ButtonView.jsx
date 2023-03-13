import {Component} from 'react';
import styles from './Button.module.scss';

export default class ButtonView extends Component {

    render() {
        const {text, click, children, width, marginRight} = this.props;


        return (
            <button onClick={click} style={{width,marginRight}} className={styles['button-buy']}>
                {children}
                <span className={styles['button-text']}>{text}</span>
            </button>
        )
    }
}