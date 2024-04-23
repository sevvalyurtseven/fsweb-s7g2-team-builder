import { Form, FormGroup } from "reactstrap";

const SignUp = ({ submitHandler, changeHandler, formData }) => {
  return (
    <Form onSubmit={submitHandler}>
      <label>
        Name
        <input
          type="text"
          name="name"
          placeholder="İsim Giriniz"
          value={formData.name}
          onChange={changeHandler}
        />
      </label>
      <label>
        Rol
        <input
          type="text"
          name="rol"
          placeholder="Rol Giriniz"
          value={formData.rol}
          onChange={changeHandler}
        />
      </label>
      <label>
        E-mail
        <input
          type="email"
          name="email"
          placeholder="johndoe@me.com"
          value={formData.email}
          onChange={changeHandler}
        />
      </label>
      <button type="submit">Submit</button>
    </Form>
  );
};
export default SignUp;
