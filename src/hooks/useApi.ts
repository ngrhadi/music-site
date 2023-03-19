import axios from 'axios';
import { API_SHAZAM } from '../api';

interface Props {
  params: string;
  methode: string;
  error: boolean;
}

const useApi = async ({ params, methode, error }: Props) => {
  return await axios({
    method: methode.toUpperCase(),
    url: `${API_SHAZAM}/${params}`,
    headers: {
      'X-RapidAPI-Key': '06cb72fce5msh32af3b7c03c08b2p199e6cjsnbe1ec3d3d99f',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
    },
  })
    .then((res) => res.data)
    .catch((err) => (error = true))
    .finally(() => (error = false));
};

export default useApi;
