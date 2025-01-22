import PropTypes from 'prop-types';
import styles from './sass/Card.module.scss';
import ButtonView from '../Button/ButtonView';
import { ReactComponent as IconBag } from '../../assets/svg/bag.svg';
import { BUTTON } from '../../constants/constants';

export default function CardView(props) {
  const {
    img,
    title,
    additionalInfo,
    description,
    price,
    currency,
    weight
  } = props;

  return (
    <div className={styles.card}>
      <div className={styles['custom-card']} />
      <div className={styles['product-image']}>
        <div className={styles.image}>
          <img src={img} alt="product" />
        </div>
      </div>
      <div className={styles['product-info']}>
        <div className={styles['title-container']}>
          <h2 className={styles.title}>{title}</h2>
          <h4 className={styles.title}>{additionalInfo}</h4>
        </div>
        <div className={styles.description}>{description}</div>
        <div className={styles.info}>
          <div className={styles.price}>
            {currency}
            {price}
          </div>
          <div className={styles.weight}>{weight}</div>
        </div>
      </div>
      <ButtonView
        text="Buy"
        variant={BUTTON.SECONDARY}
      >
        <IconBag />
      </ButtonView>
    </div>
  );
}
