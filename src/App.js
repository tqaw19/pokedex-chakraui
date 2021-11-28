import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import { Categories } from "./screens/Categories";
import DetailPokemon from "./screens/DetailPokemon";
import { Home } from "./screens/Home";
import { MyPokemons } from "./screens/MyPokemons";


function App() {
  return (
    <>
      <Router>
        <AppLayout />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/mypokemons" component={MyPokemons} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/details/:id" component={DetailPokemon} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
