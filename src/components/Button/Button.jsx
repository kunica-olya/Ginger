import styles from "../Button/Button.module.scss";
import Icon from '../../assets/svg/Vector.svg';

const Button = () => {
    return (
        <button className={styles['button-subscribe']}>
            <img className={styles['button-icon']} src={Icon} alt="icon"/>
            <span className={styles['button-text']}>Subscribe</span>
        </button>
    )
}
export default Button;
