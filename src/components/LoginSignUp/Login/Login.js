import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../Form.css";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useNavigate, useLocation } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useRef } from "react";
const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();
  let errorElement;
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const handleLogin=(event)=>{
      event.preventDefault();
      const email= emailRef.current.value;
      const password = passwordRef.current.value;
      signInWithEmailAndPassword(email,password);


  }
  let from = location.state?.from?.pathname || '/';
  if(user)
  {
      navigate(from, { replace: true })
  }
  if(error)
  {
    errorElement= (<div>
      <p className="text-danger">Error: {error?.message}</p>
    </div>)
  }
  return (
    <div className="form-container d-block mx-auto mt-5">
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password"  required/>
        </Form.Group>

        {errorElement}
        <Button
          variant="primary"
          type="submit"
          className="w-100"
        >
          Login
        </Button>
        <p>
          Don't have an account{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-info signup-navigator-text"
          >
            Register
          </span>
        </p>
      </Form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
