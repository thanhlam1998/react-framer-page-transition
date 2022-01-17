import {
  BrowserRouter as Router,
  useLocation,
  Switch,
  Route,
} from "react-router-dom";

import Header from "./components/header";
import Home from "./pages/Home";
import "./App.scss";
import Model from "./pages/Model";

function App() {
  const location = useLocation();
  const imageDetails = {
    width: 524,
    height: 630,
  };

  return (
    <>
      <Header />
      <Switch location={location} key={location.pathname}>
        <Route
          exact
          path="/"
          render={() => <Home imageDetails={imageDetails} />}
        />
        <Route exact path="/model/:id" render={() => <Model />} />
      </Switch>
    </>
  );
}

export default App;
