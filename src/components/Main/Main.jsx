import styles from "./Main.module.scss"
import Logo from '../../assets/svg/Logo-dark.svg'
import Button from "../Button/Button";
import Card from "../Card/Card";

import Strawberry from '../../assets/img/banner/strawberry-1.png';
import Strawberr from '../../assets/img/banner/strawberry-2.png';

const Main = () => {
    return (
        <div className={styles.container}>
            <section className={styles.jumbotron}>
                <div className={styles.subtitle}>
                    <a className={styles.logo} href='#'>
                        <img src={Logo} alt=""/>
                    </a>
                    <p className={styles.description}>Try and choose your flavor of delicate zephyr on
                        Instagram </p>
                    <Button/>
                </div>



                        <div className={styles.strawberry}>
                            <img src={Strawberry} alt="strawberry"/>
                        </div>

                        <div>
                            <img src={Strawberr} alt="strawberry"/>
                        </div>



                <div className={styles['background-zephir']}></div>
                <div className={styles.background}></div>

            </section>

            <section id={styles.cards}>
                {/*<Card/>*/}
            </section>
        </div>
    )
}
export default Main;

