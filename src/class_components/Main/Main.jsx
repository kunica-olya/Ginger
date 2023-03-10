import {Component} from "react";
import styles from "./Main.module.scss";
import MainView from "./MainView";
import CardView from "../Card/CardView";


export default class Main extends Component {
    constructor(props) {
        super(props)
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
            .catch(error => console.error('Error fetching data_json', error));
    }


    render() {
        const {dataIsLoaded, cards} = this.state;
        let data = <p>Data is not loading</p>

        if (dataIsLoaded) {
            data = <div id={'menu'} className={styles.wrapper}>
                {
                    cards.map(card => {
                        return <CardView
                            key={card.id}
                            card={card}
                        />
                    })
                }
            </div>
        }

        return (
            <MainView>
                {data}
            </MainView>
        )
    }
}