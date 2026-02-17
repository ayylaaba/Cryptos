import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoCompareNewsApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://min-api.cryptocompare.com/data/v2/' 
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ lang = 'EN', categories = '' } = {}) => ({
        url: 'news/',
        params: {
          lang,
          ...(categories && { categories })
        }
      }),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;