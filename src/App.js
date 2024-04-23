import "./App.css";
import { Route, Switch } from "react-router-dom";
import Members from "./components/Members";
import SignUp from "./components/SignUp";
import { useState } from "react";

function App() {
  const membersInitials = [
    {
      name: "John",
      email: "john@example.com",
      rol: "Frontend Developer",
      img: "https://picsum.photos/200/300",
    },
    {
      name: "Jane",
      email: "jane@example.com",
      rol: "Frontend Developer",
      img: "https://picsum.photos/200/300",
    },
    {
      name: "Jim",
      email: "jim@example.com",
      rol: "Frontend Developer",
      img: "https://picsum.photos/200/300",
    },
  ];
  const formDataInitials = {
    name: "",
    email: "",
    rol: "",
  };
  const [formData, setFormData] = useState(formDataInitials);
  const [members, setMembers] = useState(membersInitials);

  const submitHandler = () => {
    const newMember = {
      ...formData,
      ["img"]: "https://picsum.photos/200/300",
    };
    setMembers([...members, newMember]);
    //form submit edildikten sonra formu resetler
    setFormData(formDataInitials);
  };

  const changeHandler = (event) => {
    //Destructure
    let { value, type, name, checked } = event.target;
    value = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Members />
        </Route>
        <Route path="/signup" exact>
          <SignUp
            submitHandler={submitHandler}
            changeHandler={changeHandler}
            formData={formData}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
