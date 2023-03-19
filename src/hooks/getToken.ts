import axios from 'axios';

export const getToken = async () => {
  const realm = import.meta.env.VITE_KEYCLOAK_REALM;
  const keycloakClientSecret = import.meta.env.VITE_KEYCLOAK_CLIENT;

  const kcTokenEndpoint = `http://localhost:8080/realms/${realm}/protocol/openid-connect/token`;

  const response = await axios({
    method: 'POST',
    url: kcTokenEndpoint,
    // data: 'username=jhos&password=P@ssw0rd&grant_type=P@ssw0rd&client_id=vite01',
    data: {
      client_id: 'vite01',
      client_secret: 'zvtQkKfIZgCM9N4OMYbHot7dohHM1btI',
      grant_type: 'client_credentials',
      onLoad: 'check-sso',
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
    },
    withCredentials: true,
  })
    .then((res) => console.log(res.data, 'opo'))
    .catch((err) => console.log(err));
  // const response = await fetch(kcTokenEndpoint, {
  //   method: 'POST',
  //   mode: 'cors',
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Headers': '*',
  //   },
  //   body: JSON.stringify({
  //     client_id: 'keycloak-token-bearer', // create client in keycloak with same name
  //     client_secret: keycloakClientSecret,
  //     grant_type: 'client_credentials',
  //   }),
  // })
  //   .then((res) => res.json())
  //   .catch((err) => console.log(err));

  return response;
};
