import styles from "../Button/Button.module.scss";
import Icon from '../../assets/svg/Vector.svg';

const Button = () => {
    return (
        <button className={styles['button-subscribe']}>
            <img className={styles.icon} src={Icon} alt="icon"/>
            <div className={styles['button-text']}>Subscribe</div>
        </button>
    )
}
export default Button;
