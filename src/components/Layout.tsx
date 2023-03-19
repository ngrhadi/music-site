import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Content from './Content';
import { useAuth } from '../hooks/useAuth';
import mainbg from '../assets/pawel-czerwinski-OOFSqPWjCt0-unsplash.jpg';
import Cookies from 'js-cookie';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const { isAuth } = useAuth();
  const cookies = Cookies.get('token');

  return (
    // <div className="container">
    <div
      className="row align-items-center"
      style={{
        minHeight: '100vh',
        height: '100vh',
        width: '100vw',
      }}
    >
      {/* {cookies !== undefined ? (
          <div className="col-4">
            <Content />
          </div>
        ) : null} */}
      <div className={'col-12'}>{children}</div>
    </div>
    // </div>
  );
};

export default Layout;
