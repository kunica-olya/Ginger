import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import image1 from '../../assets/img/gallery/gallery-1.jpg';
import image2 from '../../assets/img/gallery/gallery-2.jpg';
import image3 from '../../assets/img/gallery/gallery-3.jpg';
import image4 from '../../assets/img/gallery/gallery-4.jpg';
import ButtonView from '../Button/ButtonView';
import { ReactComponent as IconInstagram } from '../../assets/svg/instagram.svg';
import { BUTTON } from '../../constants/constants';

export default function GalleryView({ handlerImageLoader }) {
                    const { t } = useTranslation();

                    GalleryView.propTypes = {
                                        handlerImageLoader: PropTypes.func.isRequired
                    };

                    return (
                      <div className={styles['gallery-container']}>
                        <div className={styles['gallery-items']}>
                          <div>
                            <img
                              onLoad={handlerImageLoader}
                              className={`${styles.image} ${styles['radius-image']}`}
                              src={image1}
                              alt="zephyr"
                            />
                          </div>
                          <div>
                            <img
                              onLoad={handlerImageLoader}
                              className={`${styles.image} ${styles['bottom-image']} ${styles['radius-image']}`}
                              src={image2}
                              alt="zephyr"
                            />
                          </div>
                        </div>
                        <div>
                          <img
                            onLoad={handlerImageLoader}
                            className={`${styles['center-image']} ${styles['radius-image']}`}
                            src={image3}
                            alt="zephyr"
                          />
                        </div>
                        <div className={styles['gallery-items']}>
                          <div className={styles['content-block']}>
                            <h2 className={styles.title}>Gallery</h2>
                            <p className={styles.description}>{t('gallery.description')}</p>
                            <ButtonView
                              text={t('gallery.buttonSubscribe')}
                              variant={BUTTON.PRIMARY}
                            >
                              <IconInstagram />
                            </ButtonView>
                          </div>
                          <div>
                            <img
                              onLoad={handlerImageLoader}
                              id={styles.different}
                              className={`${styles.image} ${styles['radius-image']}`}
                              src={image4}
                              alt="zephyr"
                            />
                          </div>
                        </div>
                      </div>
                    );
}
