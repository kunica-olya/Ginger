import { useTranslation } from 'react-i18next';
import { Oval } from 'react-loader-spinner';
import styles from './Main.module.scss';
import { ReactComponent as Logo } from '../../assets/svg/Logo-dark.svg';
import ButtonView from '../../components/Button/ButtonView';
import { ReactComponent as IconInstagram } from '../../assets/svg/instagram.svg';
import CardView from '../../components/Card/CardView';
import GalleryLoader from '../../components/Gallery/GalleryLoader';
import ContactsView from '../../components/Contacts/ContactsView';
import WorkScheduleView from '../../components/Contacts/WorkSchedule/WorkScheduleView';
import MapView from '../../components/Contacts/Map/MapView';
import { BASE_URL, BUTTON } from '../../constants/constants';
import { useFetchCardsQuery } from '../../store/apis/extendedApi';

export default function MainView() {
  const { t } = useTranslation();

  const {
    data,
    isFetching,
    refetch,
  } = useFetchCardsQuery({
    populate: '*',
    sort: 'id:asc'
  });

  const formattedData = data?.data?.map((item) => ({
    id: item.id,
    title: item.attributes.title,
    description: item.attributes.description,
    additionalInfo: item.attributes.additionalInfo,
    price: item.attributes.price,
    weight: item.attributes.weight,
    currency: item.attributes.currency,
    img: BASE_URL + item.attributes.img.data.attributes.url
  }));

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

      <ButtonView
        text={t('main.buttonUpdate')}
        click={refetch}
        variant={BUTTON.PRIMARY}
        className="preloader-button"
      >
        <div>
          {isFetching && (
            <Oval
              width={30}
              height={30}
              wrapperClass="loader"
              color="#4fa94d"
              visible
              ariaLabel="oval-loading"
            />
          )}
        </div>
      </ButtonView>

      <section id={styles.cards}>
        <div id="menu" className={styles.wrapper}>
          {formattedData && formattedData.map((card) => (
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
