import {Component} from 'react';
import styles from './Header.module.scss';
import {Link} from "react-router-dom";

export default class Header extends Component {

    render() {
        const {address, phone} = this.props.config;
        let data = <p>No data</p>;

        if (address && phone !== null) {
            data = <div className={styles.contacts}>
                <a className={styles.location}>
                    {address}
                </a>
                <a className={styles.phone} href={'tel:' + phone}>{phone}</a>
            </div>
        }

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
                                <Link to="/#menu">Menu</Link>
                            </li>
                            {/*<li><a href='#menu'>Menu</a></li>*/}
                            <li><a href='#gallery'>Gallery</a></li>
                            <li><a href='#contacts'>Contacts</a></li>
                            <li>
                                <Link to="/orders">Orders</Link>
                            </li>
                        </ul>
                        {data}
                    </nav>
                </header>
            </div>
        )
    }
}