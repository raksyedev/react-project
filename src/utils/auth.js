import { Cookies } from 'react-cookie';
import jwtDecode from 'jwt-decode';

const setToken = (token) => {
  const cookies = new Cookies();
  if (token) cookies.set('token', JSON.stringify(token), { path: '/' });
  else cookies.remove('token', { path: '/' });
};

const getAuthToken = () => {
  const cookies = new Cookies();
  const token = cookies.get('token');
  if (token) {
    if (typeof token === 'object') {
      return token;
    }

    return JSON.parse(token);
  }

  return null;
};

const isUserAuthenticated = () => {
  const token = getAuthToken();
  if (!token) {
    return false;
  }
  const decoded = jwtDecode(token.access); // your token access
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    console.warn('access token expired');
    return false;
  }
  return true;
};

export { isUserAuthenticated, getAuthToken, setToken };
