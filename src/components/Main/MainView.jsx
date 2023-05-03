import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Oval } from 'react-loader-spinner';
import styles from './Main.module.scss';
import { ReactComponent as Logo } from '../../assets/svg/Logo-dark.svg';
import ButtonView from '../Button/ButtonView';
import { ReactComponent as IconInstagram } from '../../assets/svg/instagram.svg';
import CardView from '../Card/CardView';
import GalleryLoader from '../Gallery/GalleryLoader';
import ContactsView from '../Contacts/ContactsView';
import WorkScheduleView from '../Contacts/WorkSchedule/WorkScheduleView';
import MapView from '../Contacts/Map/MapView';
import { BUTTON } from '../../constants/constants';

export default function MainView({ data, handlerUpdate, isLoading }) {
    const { t } = useTranslation();

    MainView.propTypes = {
        data: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                additionalInfo: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                weight: PropTypes.string.isRequired,
                currency: PropTypes.string.isRequired,
                img: PropTypes.string.isRequired,
            })
        ).isRequired,
        handlerUpdate: PropTypes.func.isRequired,
        isLoading: PropTypes.bool.isRequired
    };

    return (
      <div className={styles.container}>
        <section className={styles.jumbotron}>
          <div className={styles.subtitle}>
            <a className={styles.logo} href="/">
              <Logo />
            </a>
            <p className={styles.description}>{t('jumbotron.description')}</p>
            <ButtonView
              text={t('jumbotron.buttonSubscribe')}
              variant={BUTTON.PRIMARY}
            >
              <IconInstagram />
            </ButtonView>
          </div>
          <div className={styles.strawberry} />
          <div className={styles['background-zephir']} />
        </section>
        <div className={styles['second-strawberry']} />
        <div className={styles.background} />

        <div>
          <ButtonView
            text="Update"
            click={handlerUpdate}
            variant={BUTTON.PRIMARY}
            className="preloader-button"
          >
            {isLoading && (
            <Oval
              width={30}
              height={30}
              wrapperClass="loader"
              color="#4fa94d"
              visible
              ariaLabel="oval-loading"
            />
                    )}
          </ButtonView>
        </div>

        <section id={styles.cards}>
          <div id="menu" className={styles.wrapper}>
            {data.map((card) => (
              <CardView
                key={card.id}
                card={card}
              />
                    ))}
          </div>
        </section>

        <section id={styles.gallery}>
          <div id="gallery">
            <GalleryLoader />
          </div>
        </section>

        <section id={styles.contacts}>
          <div className={styles.info}>
            <div className={styles.block}>
              <ContactsView />
              <WorkScheduleView />
            </div>
            <MapView />
          </div>
        </section>
      </div>
    );
}
