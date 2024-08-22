import React from "react";
import JSX from "./Component/JSX";
import Web from "./Component/Web";
import Practice from "./Component/Practice";
import API from "./Component/API";
import Element from "./Component/Element";
import UseStateHook from "./Component/UseStateHook";
import Lists from "./Component/Lists";
import DisplayDate from "./Component/DisplayDate"
import ReactRouterDom from "./Component/ReactRouterDom";
import Props from "./Component/Props";



const App = () => {
  return <div className="main">
    <JSX />
    <hr />
    <Web />
    <hr />
    <Practice />
    <hr />
    <API />
    <hr />
    <ReactRouterDom />
    <hr />
    <Element />
    <hr />
    <UseStateHook />
    <hr />
    <Lists />
    <hr />
    <DisplayDate />
    <hr />
    <Props />
  </div>;
};

export default App;
