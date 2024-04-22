import "./App.css";
import { Route, Switch } from "react-router-dom";
import Members from "./components/Members";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Members />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
