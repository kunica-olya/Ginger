import styles from './Header.module.scss';

const Header = () => {
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
                        <li><a href='#menu'>Menu</a></li>
                        <li><a href='#gallery'>Gallery</a></li>
                        <li><a href='#contacts'>Contacts</a></li>
                    </ul>
                    <div className={styles.contacts}>
                        <a className={styles.location} href='#сontacts'>
                            Kyiv, st. Shevchenko, 24
                        </a>
                        <a className={styles.phone} href="tel:066-05-10-749">066 05 10 749</a>
                    </div>
                </nav>
            </header>
        </div>
    )
}
export default Header;

