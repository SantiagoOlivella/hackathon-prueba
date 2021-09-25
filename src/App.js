import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Nav } from "./components/Nav";
import { Recetas } from "./components/Recetas";
import { useUser } from "./context/UserContext";


function App() {

  const { login } = useUser();

  const validar = () => {
    if (login) {
      return true;
    } else {
      return false;
    }
  }

  const Private = (props) => {
    return validar() ? <Route {...props} /> : <Redirect to='/' />;
  };
  const Public = (props) => {
    return validar() ? <Redirect to='/'/> : <Route {...props} />;
  };

  return (

    <Router>
      <Nav />
      <Switch>
        <Private path="/recetas" component={Recetas} />
        <Public path="/" exact component={Login} />
        <Private path="/home" component={Home} />
      </Switch>
    </Router>

  );
}

export default App;
