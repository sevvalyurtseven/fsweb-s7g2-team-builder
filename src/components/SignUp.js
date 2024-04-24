import { useEffect } from "react";
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

const SignUp = ({
  submitHandler,
  changeHandler,
  formData,
  errors,
  isValid,
}) => {
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
              invalid={!!errors.name}
            />
            <FormFeedback>{errors.name}</FormFeedback>
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
              invalid={!!errors.rol}
            />
            <FormFeedback>{errors.rol}</FormFeedback>
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
              invalid={!!errors.email}
            />
            <FormFeedback>{errors.email}</FormFeedback>
          </FormGroup>
          <FormGroup check>
            <Label for="terms">
              <Input
                id="terms"
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={changeHandler}
                invalid={!!errors.terms}
              />
              I accept terms and conditions
            </Label>
            <FormFeedback>{errors.terms}</FormFeedback>
          </FormGroup>
          <FormGroup className="text-center">
            <Button color="primary" type="submit" disabled={!isValid}>
              Submit
            </Button>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
};
export default SignUp;
