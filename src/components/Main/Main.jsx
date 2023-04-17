import {MainView} from "./MainView";
import {withLayout} from "../HOC/withLayout";
import {useState, useEffect} from "react";

export const Main = () => {

    const [cards, setCards] = useState([]);
    const [dataIsLoaded, setDataIsLoaded] = useState(false)


    useEffect(() => {
        fetch('/cardsData.json')
            .then(response => response.json())
            .then(data => {
                setCards(data);
                setDataIsLoaded(true);
            })
            .catch(error => console.error('Error fetching data_json', error));
    }, []);


    return (
        <>
            {dataIsLoaded && <MainView data={cards}/>}
            {!dataIsLoaded && <div>Loading</div>}
        </>
    )
}

export default withLayout(Main);