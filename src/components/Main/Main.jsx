import {MainView} from "./MainView";
import {withLayout} from "../HOC/withLayout";
import {useState, useEffect} from "react";
import {Oval} from "react-loader-spinner";

const Main = () => {

    const [cards, setCards] = useState([]);
    const [dataIsLoaded, setDataIsLoaded] = useState(false)


    useEffect(() => {
        fetch('/cardsData.json')
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    setCards(data);
                    setDataIsLoaded(true);
                }, 3000)

            })
            .catch(error => console.error('Error fetching data_json', error));
    }, []);


    return (
        <div>
            {dataIsLoaded ? (
                <MainView data={cards}/>
            ) : (
                <Oval
                    height={50}
                    width={50}
                    color="#4fa94d"
                    wrapperStyle={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#4fa94d"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                />
            )}
        </div>
    )
}

export default withLayout(Main);