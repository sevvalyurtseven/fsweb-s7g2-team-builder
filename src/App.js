import "./App.css";
import { Route, Switch } from "react-router-dom";
import Members from "./components/Members";
import SignUp from "./components/SignUp";
import { useState } from "react";
import Header from "./components/Header";
import { useHistory } from "react-router-dom";

function App() {
  const membersInitials = [
    {
      id: 1,
      name: "John",
      email: "john@example.com",
      rol: "Frontend Developer",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      name: "Jane",
      email: "jane@example.com",
      rol: "Frontend Developer",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 3,
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
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
