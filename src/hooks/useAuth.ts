import Keycloak from 'keycloak-js';
import { useEffect, useRef, useState } from 'react';
import { getToken } from './getToken';
import Cookies from 'js-cookie';

const client = new Keycloak({
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT,
});

export function useAuth() {
  const [isAuth, setIsAuth] = useState(false);
  const loading = useRef(false);
  useEffect(() => {
    if (isAuth === true) {
      Cookies.set('token', 'token-secret');
    }
  }, [isAuth]);

  // useEffect(() => {
  //   if (loading.current) return;

  //   loading.current = true;
  //   // const data = ;
  //   // console.log(data, 'data');
  //   // getToken();
  //   client
  //     .init({
  //       onLoad: 'check-sso',
  //       // silentCheckSsoRedirectUri: window.location.origin + '/',
  //       redirectUri: 'http://127.0.0.1:5173/',
  //       checkLoginIframe: false,
  //     })
  //     .then((response) => {
  //       // let item = localStorage.getItem('dsd');
  //       // console.log(item, 'asdfasdf');
  //       setIsAuth(response);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   const value = async () => {
  //     return await client.updateToken(3);
  //   };
  //   // console.log(client.register());
  //   // });
  // }, [client]);

  return { isAuth, setIsAuth };
}
