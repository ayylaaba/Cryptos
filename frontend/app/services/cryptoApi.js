
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://coinranking1.p.rapidapi.com', // Direct URL
    headers: {
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': 'cf28f051ffmshe6ae2fbfe1ab5f7p1fe3d8jsn1a4bdd1418c0',
    }
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => '/coins',
    }),

    getCryptoDetails: builder.query({
      query: (coinId) => `/coin/${coinId}`,
    }),
    
  }),
});

export const { 
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
} = cryptoApi;
