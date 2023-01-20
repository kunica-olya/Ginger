import Logo from '../../assets/svg/Logo-white.svg';
import styles from '../Footer/Footer.module.scss';

const Footer = () => {
    return (

        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles['footer-container']}>
                    <a href="#">
                        <img src={Logo} alt="logo"/>
                    </a>
                    <div className={styles['footer-info']}>
                        <nav className={styles.navigation}>
                            <ul>
                                <li>Menu</li>
                                <li>Gallery</li>
                                <li>About us</li>
                            </ul>
                        </nav>
                        <div className="copyright">
                            All rights reserved © 2022. Ginger konditori
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;