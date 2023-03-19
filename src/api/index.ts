import axios from 'axios';

const configurations = {
  DOMAIN_SHAZAM: 'https://shazam.p.rapidapi.com',
};

export const API_SHAZAM = axios.create({
  baseURL: configurations.DOMAIN_SHAZAM,
});

// const configurations = {
//   APP_VERSION: process.env.APP_VERSION!,
//   VH_API_DOMAIN: import.meta.env.PROD
//     ? 'https://api.vaulthunters.gg'
//     : 'http://localhost:3002',
// };

// export default configurations;
