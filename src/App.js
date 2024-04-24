import "./App.css";
import { Route, Switch } from "react-router-dom";
import Members from "./components/Members";
import SignUp from "./components/SignUp";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

function App() {
  const membersInitials = [
    {
      id: 1,
      name: "John",
      email: "john@example.com",
      rol: "Frontend Developer",
      img: "https://picsum.photos/200/300",
      terms: true,
    },
    {
      id: 2,
      name: "Jane",
      email: "jane@example.com",
      rol: "Frontend Developer",
      img: "https://picsum.photos/200/300",
      terms: true,
    },
    {
      id: 3,
      name: "Jim",
      email: "jim@example.com",
      rol: "Frontend Developer",
      img: "https://picsum.photos/200/300",
      terms: true,
    },
  ];
  const formDataInitials = {
    name: "",
    email: "",
    rol: "",
    terms: false,
  };
  const [formData, setFormData] = useState(formDataInitials);
  const [members, setMembers] = useState(membersInitials);

  //States of form
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

  //useEffect ile formdaki verilerin dogrulugunu kontrol ediyoruz

  useEffect(() => {
    validationSchema.isValid(formData).then((valid) => {
      setIsValid(valid);
    });
  }, [formData]);

  let history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    if (formData.id) {
      //edit
      let updatedMember = members.map((member) => {
        if (member.id === formData.id) {
          return formData;
        } else {
          return member;
        }
      });
      setMembers(updatedMember);
    } else {
      const newMember = {
        ...formData,
        ["img"]: "https://picsum.photos/200/300",
        ["id"]: members[members.length - 1].id + 1,
      };
      setMembers([...members, newMember]);
    }

    //form submit edildikten sonra formu resetler
    setFormData(formDataInitials);
    history.push("/");
  };

  const changeHandler = (event) => {
    //Destructure
    let { value, type, name, checked } = event.target;
    value = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: value });

    Yup.reach(validationSchema, name)
      .validate(value)
      .then((response) => setErrors({ ...errors, [name]: "" }))
      .catch((error) => setErrors({ ...errors, [name]: error.errors[0] }));
  };

  const editMember = (member) => {
    setFormData(member); //edit edilecek kisim
    history.push("/signup");
  };
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Members members={members} editMember={editMember} />
        </Route>
        <Route path="/signup" exact>
          <SignUp
            submitHandler={submitHandler}
            changeHandler={changeHandler}
            formData={formData}
            isValid={isValid}
            errors={errors}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
