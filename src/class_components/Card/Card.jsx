import {Component} from 'react';
import styles from "./Card.module.scss";

import Button from '../../class_components/Button/Button';

export default class Card extends Component {

    render() {

        const {img, title, additionalInfo, description, price, weight} = this.props.card;

        return (
            <div className={styles.card}>
                <div className={styles['custom-card']}></div>
                <div className={styles['product-image']}>
                    <div className={styles.image}>
                        <img src={img} alt="product"/>
                    </div>
                </div>
                <div className={styles['product-info']}>
                    <div className={styles['title-container']}>
                        <h2 className={styles.title}>{title}</h2>
                        <h4 className={styles.title}>{additionalInfo}</h4>
                    </div>
                    <div className={styles.description}>{description}</div>
                    <div className={styles.info}>
                        <div className={styles.price}>{price}</div>
                        <div className={styles.weight}>{weight}</div>
                    </div>
                </div>
                <Button text={'Buy'}/>
            </div>
        )
    }
}