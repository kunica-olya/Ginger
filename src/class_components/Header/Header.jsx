import {Component} from 'react';
import styles from './Header.module.scss';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: null,
            phone: null,
            dataIsLoaded: false
        }
    }

    componentDidMount() {
        fetch('/app_config.json')
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    address: data.address,
                    phone: data.phone,
                    dataIsLoaded: true
                });
            })
            .catch(error => console.error('Error fetching app_config', error));
    }

    render() {
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
                            <li><a href='#'>Contacts</a></li>
                        </ul>
                        <div className={styles.contacts}>
                            <a className={styles.location}>
                                {this.state.address}
                            </a>
                            <a className={styles.phone} href={'tel:' + this.state.phone}>{this.state.phone}</a>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}