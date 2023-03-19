import { CookiesStatic } from 'js-cookie';
import React, { useEffect } from 'react';
import { NavigateFunction, redirect, useNavigate } from 'react-router-dom';
import NoAuthorize from '../components/NoAuthorize';

interface Props {
  isAuth: boolean;
  backToHome: NavigateFunction;
  cookies: string | undefined;
}
const HomeAccount = ({ isAuth, backToHome, cookies }: Props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (cookies === undefined) {
      navigate('/');
    }
  }, [cookies]);
  return (
    <div style={{ zIndex: 2 }}>
      {cookies === undefined && <NoAuthorize />}
      Hello You
    </div>
  );
};

export default HomeAccount;
