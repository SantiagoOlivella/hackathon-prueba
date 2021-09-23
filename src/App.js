import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Nav } from "./components/Nav";
import { Recetas } from "./components/Recetas";


function App() {
  return (

    <Router>
      <Nav/>
      <Switch>
        <Route path="/recetas" component={Recetas} />
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
    
  );
}

export default App;
