import { Route, Routes, useNavigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { Counter } from './redux/features/counter/Counter';
import Home from './pages/Home';
import Login from './pages/Login';
import HomeAccount from './pages/HomeAccount';
import Cookies from 'js-cookie';

function App() {
  const { isAuth, setIsAuth } = useAuth();
  const backToHome = useNavigate();
  const cookies = Cookies.get('token');

  console.log(cookies);
  console.log(isAuth);
  return (
    <div
      style={{
        minHeight: 'calc(100svh - 30svh)',
        margin: '20px auto',
      }}
    >
      <Routes>
        {cookies !== undefined ? (
          <>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/home"
              element={
                <HomeAccount
                  isAuth={isAuth}
                  backToHome={backToHome}
                  cookies={cookies}
                />
              }
            />
          </>
        ) : (
          <Route path="/" element={<Login setIsAuth={setIsAuth} />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
