import {Component} from 'react';
import {ReactComponent as Logo} from '../../assets/svg/Logo-white.svg';
import styles from './Footer.module.scss';

export default class Footer extends Component {

    render() {
        const {author} = this.props.config;
        const github = {
            label: this.props.config.github_label,
            link: this.props.config.github_link,
        };

        const design = {
            label: this.props.config.design_label,
            link: this.props.config.design_link,
        };

        let data = <p>No data</p>;

        if (github && author && design !== null) {
            data = <ul>
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
        }

        return (
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles['footer-container']}>
                        <a className={styles.logo} href="#">
                            <Logo/>
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
                            {data}
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}