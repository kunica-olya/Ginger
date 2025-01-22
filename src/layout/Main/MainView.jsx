import { useTranslation } from 'react-i18next';
import styles from './sass/Main.module.scss';
import { ReactComponent as Logo } from '../../assets/svg/Logo-dark.svg';
import ButtonView from '../../components/Button/ButtonView';
import { ReactComponent as IconInstagram } from '../../assets/svg/instagram.svg';
import CardView from '../../components/Card/CardView';
import GalleryLoader from '../../components/Gallery/GalleryLoader';
import ContactsView from '../../components/Contacts/ContactsView';
import WorkScheduleView from '../../components/Contacts/WorkScheduleView';
import MapView from '../../components/Contacts/MapView';
import { BUTTON } from '../../constants/constants';
// import { useFetchCardsQuery } from '../../store/apis/extendedApi';
import withLayout from '../../hocs/withLayout';
import cardsData from "../../cardsData";


function MainView() {
  const { t } = useTranslation();

  // const {
  //   cards,
  //   isFetching,
  //   refetch,
  // } = useFetchCardsQuery(undefined, {
  //   selectFromResult: ({ data }) => ({
  //     cards: data?.data.map((item) => ({
  //       id: item.id,
  //       title: item.attributes.title,
  //       description: item.attributes.description,
  //       additionalInfo: item.attributes.additionalInfo,
  //       price: item.attributes.price,
  //       weight: item.attributes.weight,
  //       currency: item.attributes.currency,
  //       img: BASE_URL + item.attributes.img.data.attributes.url,
  //     })),
  //   }),
  // });

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

      <section id={styles.cards}>
        <div id="menu" className={styles.wrapper}>
            {cardsData.map(product => (
                <CardView
                    key={product.id}
                    img={product.img}
                    title={product.title}
                    additionalInfo={product.additionalInfo}
                    description={product.description}
                    price={product.price}
                    weight={product.weight}/>
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
export default withLayout(MainView);
