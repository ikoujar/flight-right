import useSWR from 'swr';
import axiosInstance from 'axios';
import { cleanQueryParams } from '../utils/helpers';

/**
 * SWR data fetcher.
 * @param params
 */
const fetcher = (params: any) =>
  (url: string) => axiosInstance.get(url, params)
    .then((res) => res.data);


/**
 * Generic api webhook function.
 * @param endpoint
 * @param params
 */
export function useApi(endpoint: string, params?: any) {

  if (params) {
    endpoint += `?${new URLSearchParams(cleanQueryParams(params)).toString()}`;
  }

  const { data, mutate, error } = useSWR(endpoint, fetcher(params));

  const loading = !data?.data && !error;

  return {
    loading,
    error,
    data: data?.data,
    mutate
  };

}
