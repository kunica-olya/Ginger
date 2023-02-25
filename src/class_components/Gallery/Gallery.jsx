import {Component} from 'react';
import styles from './Gallery.module.scss'
import image1 from '../../assets/img/gallery/gallery-1.jpg';
import image2 from '../../assets/img/gallery/gallery-2.jpg';
import image3 from '../../assets/img/gallery/gallery-3.jpg';
import image4 from '../../assets/img/gallery/gallery-4.jpg';
import Button from '../../function_components/Button/Button';
// import Button from '../../class_components/Button/Button';

export default class Gallery extends Component {

    render() {
        return (
            <div className={styles['gallery-container']}>
                <div className={styles['gallery-items']}>
                    <div>
                        <img className={`${styles.image} ${styles['radius-image']}`} src={image1} alt="zephyr"/>
                    </div>
                    <div>
                        <img className={`${styles.image} ${styles['bottom-image']} ${styles['radius-image']}`}
                             src={image2} alt="zephyr"/>
                    </div>
                </div>
                <div>
                    <img className={`${styles['center-image']} ${styles['radius-image']}`} src={image3} alt="zephyr"/>
                </div>
                <div className={styles['gallery-items']}>
                    <div className={styles['content-block']}>
                        <h2 className={styles.title}>Gallery</h2>
                        <p className={styles.description}>You inspire us to create airy, tender zephyrs. Check out our
                            desserts on Instagram</p>
                        <Button text={'Subscribe'}/>
                    </div>
                    <div>
                        <img id={styles.different} className={`${styles.image} ${styles['radius-image']}`}
                             src={image4} alt="zephyr"/>
                    </div>
                </div>
            </div>
        )
    }
}