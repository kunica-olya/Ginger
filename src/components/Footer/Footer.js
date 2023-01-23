import Logo from '../../assets/svg/Logo-white.svg';
import styles from '../Footer/Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles['footer-container']}>
                    <a className={styles.logo} href="#">
                        <img src={Logo} alt="logo"/>
                    </a>
                    <div className={styles['footer-info']}>
                        <nav>
                            <ul>
                                <li><a href="#">Menu</a></li>
                                <li><a href="#">Gallery</a></li>
                                <li><a href="#">About us</a></li>
                            </ul>
                        </nav>
                        <div className={styles.copyright}>All rights reserved © 2022. Ginger konditori</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;