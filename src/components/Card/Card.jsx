import styles from "./Card.module.scss"
import Button from "../Button/Button";


import zephyr from "../../assets/img/ellipses/ellipse-1.png"


const Card = (props) => {
    const {img,title, description, price, weight} = props;
    return (
        <div className={styles.card}>
            <div className={styles['product-image']}>
                <div className={styles.image}>
                    <img src={zephyr} alt="product"/>
                </div>
            </div>
            <div className={styles['product-info']}>
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{description}</div>
                <div className={styles.info}>
                    <div className={styles.price}>{price}</div>
                    <div className={styles.weight}>{weight}</div>
                </div>
            </div>
            <Button/>
        </div>
    )
}
export default Card;