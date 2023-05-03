import { useState, useEffect, useCallback } from 'react';
import { Oval } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import MainView from './MainView';
import withLayout from '../HOC/withLayout';
import { API_KEY, BASE_URL, API_URL } from '../../constants/constants';
import { getCards, updateCards, updateStatus } from '../../store/cards/actions';

function Main() {
    const [dataIsLoaded, setDataIsLoaded] = useState(false);

    const dispatch = useDispatch();

    const cardsData = useSelector(({ cards }) => cards.data);

    const updatedData = useSelector(({ cards }) => cards.data);

    const isLoading = useSelector(({ cards }) => cards.loading);

    const getData = async () => {
        try {
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
            setDataIsLoaded(true);
            return formattedData;
        } catch (error) {
            console.error('Error fetch data', error);
            return [];
        }
    };

    const handlerUpdateData = useCallback(() => {
        const load = async () => {
            const data = await getData();
            dispatch(updateCards(data));
            dispatch(updateStatus(true));
        };
        load();
    }, []);

    useEffect(() => {
        console.log(' handlerLoad');
        const load = async () => {
            const data = await getData();
            dispatch(getCards(data));
        };
        load();
    }, []);

    return (

      <div>
        {dataIsLoaded && (
        <MainView
          data={cardsData}
          handlerUpdate={handlerUpdateData}
          isLoading={isLoading}
        />
            )}
      </div>
    );
}

export default withLayout(Main);
