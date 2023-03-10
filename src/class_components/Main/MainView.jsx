import {Component} from "react";
import styles from "./Main.module.scss";
import {ReactComponent as Logo} from "../../assets/svg/Logo-dark.svg";
import GalleryView from "../Gallery/GalleryView";
import ButtonView from "../Button/ButtonView";

export default class MainView extends Component {

    render() {
        return (
            <div className={styles.container}>
                <section className={styles.jumbotron}>
                    <div className={styles.subtitle}>
                        <a className={styles.logo} href='#'>
                            <Logo/>
                        </a>
                        <p className={styles.description}>Try and choose your flavor of delicate zephyr on
                            Instagram </p>
                        <ButtonView text={'Subscribe'}/>
                    </div>
                    <div className={styles.strawberry}></div>
                    <div className={styles['background-zephir']}></div>
                </section>
                <div className={styles['second-strawberry']}></div>
                <div className={styles.background}></div>

                <section id={styles['cards']}>
                    {this.props.children}
                </section>

                <section id={styles['gallery']}>
                    <div id='gallery'>
                        <GalleryView/>
                    </div>
                </section>
            </div>
        )
    }
}