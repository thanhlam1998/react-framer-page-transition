import {
  BrowserRouter as Router,
  useLocation,
  Switch,
  Route,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./components/header";
import Home from "./pages/Home";
import Model from "./pages/Model";

import "./App.scss";

function App() {
  const location = useLocation();
  const imageDetails = {
    width: 524,
    height: 630,
  };

  return (
    <>
      <Header />
      <AnimatePresence initial={false} exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route
            exact
            path="/"
            render={() => <Home imageDetails={imageDetails} />}
          />
          <Route
            exact
            path="/model/:id"
            render={() => <Model imageDetails={imageDetails} />}
          />
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
