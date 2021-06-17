import React, {useRef, useState} from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
import {useAuth} from '../contexts/AuthContext';
import {HashLink as Link} from 'react-router-hash-link';
import {useHistory} from 'react-router-dom';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const {login} = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch {
      setError('Failed to log in!');
    }

    setLoading(false);
  }

  return (
    <>
      <div className={'login-body parallax'}>
        <h2 className={''}>Log In</h2>
        {error && <Alert variant={'danger'}>{error}</Alert>}
        <Form className={'login-form'} onSubmit={handleSubmit}>
          <Form.Group id={'email'}>
            <Form.Label>Email</Form.Label>
            <Form.Control type={'email'} ref={emailRef} required />
          </Form.Group>
          <Form.Group id={'password'}>
            <Form.Label>Password</Form.Label>
            <Form.Control type={'password'} ref={passwordRef} required />
          </Form.Group>
          <Button disabled={loading} type={'submit'} className={'form-button button'}>Log In</Button>
        </Form>
        <div className={''}>
          <Link to={'/forgot-password'}>Forgot Password?</Link>
        </div>
        <div className={''}>
          <p>Need an account? <Link to={'/signup'}>Sign Up</Link></p>
        </div>
      </div>
    </>
  );
}
