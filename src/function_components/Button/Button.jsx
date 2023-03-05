import styles from "../Button/Button.module.scss";
import {ReactComponent as Icon} from "../../assets/svg/Vector.svg";

const Button = ({text}) => {

    return (
        <a href='https://instagram.com/ginger.konditori' className={styles['button-subscribe']}>
            <Icon/>
            <span className={styles['button-text']}>{text}</span>
        </a>
    )
}
export default Button;
