import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Detail from "./pages/Detail";
import Main from "./pages/Main";

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/user/:id" component={Detail} />
          <Redirect exact from="/*" to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
