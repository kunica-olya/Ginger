import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL, API_KEY, BASE_URL } from '../../../constants/constants';

axios.defaults.headers.common = {
  Authorization: `Bearer ${API_KEY}`
};

export const fetchCards = createAsyncThunk(
  'cards/fetchCards',
  async () => {
    try {
      const response = await axios.get(`${API_URL}/cards?populate=*&sort=id:asc`);
      const formattedData = response.data.data.map((item) => {
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
      return formattedData;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('error', error);
    }
    return [];
  }
);

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    isLoading: false,
    cards: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cards = action.payload;
      })
      .addCase(fetchCards.rejected, (state) => {
        state.isLoading = false;
      });
  }
});

export default cardsSlice.reducer;
