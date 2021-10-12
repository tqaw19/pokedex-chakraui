import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import DetailPokemon from "./screens/DetailPokemon";
import { Home } from "./screens/Home";

// import { Counter } from "./features/counter/Counter";

function App() {
  return (
    <>
      <AppLayout />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details/:id" component={DetailPokemon} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
