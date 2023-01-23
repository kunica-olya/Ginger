import styles from "../Button/Button.module.scss";
import Icon from '../../assets/svg/Vector.svg';

const Button = () => {
    return (
        <button className={styles['button-subscribe']}>
            <span className={styles['button-text']}>
                     <img className={styles.icon} src={Icon} alt="icon"/>
                Subscribe
            </span>
        </button>
    )
}
export default Button;
