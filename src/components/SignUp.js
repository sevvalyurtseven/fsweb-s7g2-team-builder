import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const SignUp = ({ submitHandler, changeHandler, formData }) => {
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
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              placeholder="İsim Giriniz"
              value={formData.name}
              onChange={changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label>Rol</Label>
            <Input
              type="text"
              name="rol"
              placeholder="Rol Giriniz"
              value={formData.rol}
              onChange={changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label>E-mail</Label>
            <Input
              type="email"
              name="email"
              placeholder="johndoe@me.com"
              value={formData.email}
              onChange={changeHandler}
            />
          </FormGroup>

          <Button color="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default SignUp;
