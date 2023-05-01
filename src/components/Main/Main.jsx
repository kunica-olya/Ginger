import { useState, useEffect } from 'react';
import { Oval } from 'react-loader-spinner';
import MainView from './MainView';
import { withLayout } from '../HOC/withLayout';
import { API_KEY, BASE_URL, API_URL } from '../../constants/constants';

function Main() {
    const [cards, setCards] = useState([]);
    const [dataIsLoaded, setDataIsLoaded] = useState(false);

    const getData = async () => {
        try {
            setDataIsLoaded(false);
            const response = await fetch(`${API_URL}/cards?populate=*&sort=id:asc`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${API_KEY}`
                }
            });

            const data = await response.json();

            const formattedData = data.data.map((item) => {
                return {
                    id: item.id,
                    title: item.attributes.title,
                    description: item.attributes.description,
                    additionalInfo: item.attributes.additionalInfo,
                    price: item.attributes.price,
                    weight: item.attributes.weight,
                    currency: item.attributes.currency,
                    img: BASE_URL + item.attributes.img.data.attributes.url
                };
            });
            setCards(formattedData);
            setDataIsLoaded(true);
        } catch (error) {
            console.error('Error fetch data', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
      <div>
        {dataIsLoaded ? (
          <MainView data={cards} />
            ) : (
              <Oval
                height={50}
                width={50}
                color="#4fa94d"
                wrapperStyle={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '30%',
                        marginBottom: '30%'
                    }}
                visible
                ariaLabel="oval-loading"
              />
            )}
      </div>
    );
}
export default withLayout(Main);
