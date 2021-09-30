import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Nav } from "./components/Nav";
import { Receta } from "./components/Receta";
import { Recetas } from "./components/Recetas";
import { PrivateRoute } from "./routes/PrivateRoute";
import { PublicRoute } from "./routes/PublicRoute";


function App() {

  return (

    <Router>
      <Nav />
      <Switch>
        <PrivateRoute path="/recetas" exact component={Recetas} />
        <PublicRoute path="/" exact component={Login} />
        <PrivateRoute exact path="/home" component={Home} />
        <Route exact path="/description/:id" component={Receta} />
      </Switch>
    </Router>

  );
}

export default App;
