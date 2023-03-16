import {Component} from "react";
import MainView from "./MainView";


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
        const {cards} = this.state;

        return (
            <MainView data={cards}/>
        )
    }
}