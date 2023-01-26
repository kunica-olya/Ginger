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
                                <li><a href="#menu">Menu</a></li>
                                <li><a href='#'>Gallery</a></li>
                                <li><a href="#">About us</a></li>
                            </ul>
                        </nav>
                        <div className={styles.copyright}>All rights reserved © 2022. Ginger konditori</div>
                    </div>
                    <div className={styles.creator}>
                        <ul>
                            <li>Author: Olga Kunitsa</li>
                            <li>
                                <a className={styles['creator-link']} href="https://github.com/kunica-olya">Github</a>
                            </li>
                            <li>
                                <a className={styles['creator-link']}
                                   href="https://www.figma.com/file/OJta9w7wssp2iUQqk10jBu/test_confectionery-landing-page?node-id=0%3A1&t=JGLRjirLu6R8DCuX-0">
                                    Original design
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;