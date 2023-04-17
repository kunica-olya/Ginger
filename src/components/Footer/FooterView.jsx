import {ReactComponent as Logo} from '../../assets/svg/Logo-white.svg';
import styles from './Footer.module.scss';

export const FooterView = ({config}) => {

    const {author} = config;
    const github = {
        label: config.github_label,
        link: config.github_link,
    }

    const design = {
        label: config.design_label,
        link: config.design_link,
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles['footer-container']}>
                    <a className={styles.logo} href='/'>
                        <Logo/>
                    </a>
                    <div className={styles['footer-info']}>
                        <nav>
                            <ul>
                                <li><a href="#menu">Menu</a></li>
                                <li><a href='#gallery'>Gallery</a></li>
                                <li><a href="#about-us">About us</a></li>
                            </ul>
                        </nav>
                        <div className={styles.copyright}>All rights reserved © 2022. Ginger konditori</div>
                    </div>
                    <div className={styles.creator}>
                        {author !== null ? (
                            <ul>
                                <li>Author: {author}</li>
                                <li>
                                    <a className={styles['creator-link']}
                                       href={github.link}>{github.label}</a>
                                </li>
                                <li>
                                    <a className={styles['creator-link']}
                                       href={design.link}>{design.label}</a>
                                </li>
                            </ul>
                        ) : (
                            <p>No data</p>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    )
}