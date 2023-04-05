import {Component} from "react";
import styles from "./Main.module.scss";
import {ReactComponent as Logo} from "../../assets/svg/Logo-dark.svg";
import ButtonView from "../Button/ButtonView";
import {ReactComponent as IconInstagram} from "../../assets/svg/instagram.svg";
import CardView from "../Card/CardView";
import {GalleryLoader} from "../Gallery/GalleryLoader";
import {ContactsView} from "../Contacts/ContactsView";
import {WorkScheduleView} from "../Contacts/WorkSchedule/WorkScheduleView";
import {MapView} from "../Contacts/Map/MapView";
import {BUTTON} from "../../constants/constants";


export default class MainView extends Component {

    render() {
        const {data} = this.props
        return (
            <div className={styles.container}>
                <section className={styles.jumbotron}>
                    <div className={styles.subtitle}>
                        <a className={styles.logo} href='/'>
                            <Logo/>
                        </a>
                        <p className={styles.description}>Try and choose your flavor of delicate zephyr on
                            Instagram </p>
                        <ButtonView
                            text={'Subscribe'}
                            variant={BUTTON.PRIMARY}
                        >
                            <IconInstagram/>
                        </ButtonView>
                    </div>
                    <div className={styles.strawberry}></div>
                    <div className={styles['background-zephir']}></div>
                </section>
                <div className={styles['second-strawberry']}></div>
                <div className={styles.background}></div>

                <section id={styles['cards']}>
                    <div id={'menu'} className={styles.wrapper}>
                        {data.map(card => (
                            <CardView
                                key={card.id}
                                card={card}
                            />
                        ))}
                    </div>
                </section>

                <section id={styles['gallery']}>
                    <div id='gallery'>
                        <GalleryLoader/>
                    </div>
                </section>

                <section id={styles['contacts']}>
                    <div className={styles.info}>
                        <div className={styles.block}>
                            <ContactsView/>
                            <WorkScheduleView/>
                        </div>
                        <MapView/>
                    </div>
                </section>
            </div>
        )
    }
}