import styles from './Card.module.scss'
import Button from "../Button/Button";


const Card = () => {
    return (
        <div className={styles.grid}>
            <div className={styles['card-item']}>
                <div className={styles.product}>
                    <div className={styles.image}>
                        <img src="" alt="zephyr"/>
                    </div>
                    <div className={styles.name}>
                        Zephyr with currant
                    </div>
                    <div className={styles.description}>
                        Sugar, currants, agar-agar, apple
                    </div>
                </div>
                <div className={styles['product-info']}>
                    <div className={styles.price}>₴25</div>
                    <div className={styles.weight}>30 g / 1 pc</div>
                </div>
                <Button/>
            </div>
        </div>
    )
}
export default Card;