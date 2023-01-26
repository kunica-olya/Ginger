import styles from "../Button/Button.module.scss";
import Icon from '../../assets/svg/Vector.svg';

const Button = () => {
    return (
        <a href='https://instagram.com/ginger.konditori' className={styles['button-subscribe']}>
            <img className={styles['button-icon']} src={Icon} alt="icon"/>
            <span className={styles['button-text']}>Subscribe</span>
        </a>
    )
}
export default Button;
