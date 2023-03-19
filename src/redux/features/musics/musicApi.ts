import { createApi, BaseQueryFn } from '@reduxjs/toolkit/query/react';
import { Music } from '../../../types/musics';
import axios from 'axios';
import type { AxiosRequestConfig, AxiosError } from 'axios';

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'] | Music;
      headers?: AxiosRequestConfig['headers'];
      params?: AxiosRequestConfig['params'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, headers, params }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        headers: {
          'X-RapidAPI-Key':
            '06cb72fce5msh32af3b7c03c08b2p199e6cjsnbe1ec3d3d99f',
          'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
          SameSite: 'None',
        },
        method,
        data,
        params,
      });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const musicApi = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
  }),
  endpoints(build) {
    return {
      listMusic: build.query({
        query: (paramsUrl) => ({
          url: paramsUrl,
          method: 'get',
        }),
      }),
      detail: build.query({
        query: (paramsUrl) => ({
          url: paramsUrl,
          method: 'get',
        }),
      }),
      // mutation: build.mutation({
      //   query: () => ({ url: '/mutation', method: 'post' }),
      // }),
    };
  },
});

export const { useListMusicQuery, useDetailQuery } = musicApi;
