import React, { useRef, useState } from "react";
import { Button, Form, Row, Col, Toast } from "react-bootstrap";
import SocialLogin from "../SocialLogin/SocialLogin";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [agree, setAgree] = useState(false);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const nameRef = useRef();
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, resetError] = useSendPasswordResetEmail(auth);
  if (loading) {
    return <p>Loading...</p>;
  }

  const handleCreateUser = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    navigate("/home");
  };

  return (
    <div className="form-container d-block mx-auto mt-5">
      <Form onSubmit={handleCreateUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            ref={nameRef}
            type="text"
            placeholder="Enter Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={() => setAgree(!agree)}
            type="checkbox"
            label="Agree with Our terms and condition"
            className={agree ? "text-success" : "text-danger"}
          />
        </Form.Group>
        <Button
          disabled={!agree}
          className="w-100"
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Body>Password reset mail sent</Toast.Body>
      </Toast>
      <p>
        Forget Password?{" "}
        <span
          className="text-danger pointer"
          style={{ cursor: "grab" }}
          onClick={async () => {
            await sendPasswordResetEmail(emailRef.current.value);

            setShow(true);
          }}
        >
          Reset Password
        </span>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default SignUp;
