import { Button, Container, Form } from 'react-bootstrap';
import Cookies from 'js-cookie';

interface Props {
  setIsAuth: (prevState: boolean) => boolean | void;
}

const Login = ({ setIsAuth }: Props) => {
  return (
    <Container
      style={{
        width: '35rem',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(8px)',
        zIndex: 2,
        padding: '95px',
        borderRadius: '10px',
        color: 'rgba(255, 255, 255, 0.8)',
      }}
    >
      <Form className="mx-5 font-monospace">
        <Form.Group className="mb-3" controlId="login.formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="login.formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="login.formBasicCheckbox">
          <Form.Check
            className="checkbox"
            type="checkbox"
            label="Remember me"
          />
        </Form.Group>
        <div className="row align-items-center">
          <div className="d-grid col-6 mx-auto">
            <Button
              variant="primary"
              type="submit"
              className="btn btn-outline-dark btn-light"
            >
              Registration
            </Button>
          </div>
          <div className="d-grid col-6 mx-auto">
            <Button
              variant="primary"
              type="submit"
              className="btn btn-outline-dark btn-light"
              onClick={() => {
                setIsAuth(true);
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
