import styles from './Header.module.scss';
import {HashLink as Link} from 'react-router-hash-link';
import {Select} from "./Select";
import {useTranslation} from "react-i18next";


export const HeaderView = ({config}) => {

    const {address, phone} = config;

    const {t} = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles['background-logo']}></div>
            <header className={styles.header}>
                <div className={styles['bright-background']}></div>
                <div className={styles['repeat-background']}></div>
                <div className={styles['additional-background']}></div>
                <nav className={styles['nav-wrapper']}>
                    <div className={styles.block}></div>
                    <ul>
                        <li>
                            <Link to="/#menu">{t('nav.menu')}</Link>
                        </li>
                        <li>
                            <Link to="/#gallery">{t('nav.gallery')}</Link>
                        </li>
                        <li>
                            <Link to="/#contacts">{t('nav.contacts')}</Link>
                        </li>

                        <li>
                            <Link to="/orders">{t('nav.orders')}</Link>
                        </li>

                        <li>
                            <Link to="/todo">{t('nav.todo')}</Link>
                        </li>
                    </ul>
                    {address && phone !== null ? (
                        <div className={styles.contacts}>
                            <a className={styles.location} href='#contacts'>{t('nav.address')}</a>
                            <a className={styles.phone} href={`tel:${phone}`}>
                                {phone}
                            </a>
                        </div>
                    ) : (
                        <p>No data</p>
                    )}
                    <Select/>
                </nav>
            </header>
        </div>
    )
}



