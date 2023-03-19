import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style.module.scss';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';
import mainbg from './assets/visax-NJ9o_qvQc8k-unsplash.jpg';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${mainbg})`,
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
            minWidth: '100vw',
            position: 'fixed',
            zIndex: -1,
          }}
        ></div>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
