import React from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
const ContactForm = () => {
  const [user,loading] = useAuthState(auth);
  return (
    <div className="mt-5 w-50 d-block mx-auto">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" value={user?.email} placeholder="Email Address"  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button  variant="primary" type="submit" className="w-100">
          submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
