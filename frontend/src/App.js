import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./screens/Landing";
import Model from "./screens/Model";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/model" component={Model} />
          <Route path="/" exact component={Landing} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
