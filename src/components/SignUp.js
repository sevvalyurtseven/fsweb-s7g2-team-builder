import { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import * as Yup from "yup";

const SignUp = ({ submitHandler, changeHandler, formData }) => {
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    rol: "",
    terms: "",
  });
  //Form Validation
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    rol: Yup.string().required("Rol is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    terms: Yup.boolean().oneOf([true], "You must accept the terms"),
  });
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center" }}>Sign Up Form</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          padding: "50px",
        }}
      >
        <Form onSubmit={submitHandler}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="İsim Giriniz"
              value={formData.name}
              onChange={changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="rol">Rol</Label>
            <Input
              id="rol"
              type="text"
              name="rol"
              placeholder="Rol Giriniz"
              value={formData.rol}
              onChange={changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="johndoe@me.com"
              value={formData.email}
              onChange={changeHandler}
            />
          </FormGroup>
          <FormGroup check>
            <Label for="terms">
              <Input
                id="terms"
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={changeHandler}
              />
              I accept terms and conditions
            </Label>
          </FormGroup>
          <FormGroup className="text-center">
            <Button color="primary" type="submit">
              Submit
            </Button>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
};
export default SignUp;
