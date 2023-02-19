import {Component} from 'react';
import styles from "./Card.module.scss";
import Button from '../../function_components/Button/Button';
 gjgjgjg
export default class Card extends Component {

    render() {
        return (
            <div className={styles.card}>
                <div className={styles['custom-card']}></div>
                <div className={styles['product-image']}>
                    <div className={styles.image}>
                        <img src={this.props.card.img} alt="product"/>
                    </div>
                </div>
                <div className={styles['product-info']}>
                    <div className={styles['title-container']}>
                        <h2 className={styles.title}>{this.props.card.title}</h2>
                        <h4 className={styles.title}>{this.props.card.additionalInfo}</h4>
                    </div>
                    <div className={styles.description}>{this.props.card.description}</div>
                    <div className={styles.info}>
                        <div className={styles.price}>{this.props.card.price}</div>
                        <div className={styles.weight}>{this.props.card.weight}</div>
                    </div>
                </div>
                <Button/>
            </div>
        )
    }
}