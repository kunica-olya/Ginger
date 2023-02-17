import {Component} from 'react';
import {ReactComponent as Logo} from '../../assets/svg/Logo-dark.svg';
import styles from "./Main.module.scss";
import Card from "../Card/Card";
import Button from '../../function_components/Button/Button';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            dataIsLoaded: false
        }
    }

    componentDidMount() {
        fetch('/cardsData.json')
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    cards: data,
                    dataIsLoaded: true
                });
            })
    }

    render() {
        const {dataIsLoaded, cards} = this.state;
        let data = <p>Data is loading</p>

        if (dataIsLoaded) {
            data = <div id={'menu'} className={styles.wrapper}>
                {
                    cards.map(card => {
                        return <Card
                            key={card.id}
                            card={card}
                        />
                    })
                }
            </div>
        }
        return (
            <div className={styles.container}>
                <section className={styles.jumbotron}>
                    <div className={styles.subtitle}>
                        <a className={styles.logo} href="#">
                            <Logo/>
                        </a>
                        <p className={styles.description}>Try and choose your flavor of delicate zephyr on
                            Instagram </p>
                        <Button/>
                    </div>
                    <div className={styles.strawberry}></div>
                    <div className={styles['background-zephir']}></div>
                </section>
                <div className={styles['second-strawberry']}></div>
                <div className={styles.background}></div>

                <section id={styles.cards}>
                    {data}
                </section>
            </div>
        )
    }
}