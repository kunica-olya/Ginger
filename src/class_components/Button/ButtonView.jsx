import {Component} from 'react';
import styles from './Button.module.scss';

export default class ButtonView extends Component {

    render() {
        const {
            text,
            click,
            children,
            variant,
            className
        } = this.props;

        return (
            <button onClick={click} className={`${styles.button} ${styles[variant]} ${styles[className]}`}>
                {children}
                <span className={styles['button-text']}>{text}</span>
            </button>
        )
    }
}