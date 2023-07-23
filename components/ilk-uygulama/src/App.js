import logo from "./logo.svg";
import User from "./components/user";
import "./App.css";
import Header from "./components/header";
import React from "react";

const isLoggedIn = true;

function App() {
  // React.createElement("div", null, "Hello");
  //birden fazla element yazmak istiyorsan tek bir çatı elementinin içerisinde yapman gerekli
  //returnun içinde kapsayıcı bir tane html componenti olması lazım
  // js keywordleri ile çakışmaası için label için for = htmlFor, yada className html için de kullanırken karışmaması için
  return (
    <>
      <User
        name="ibrahim"
        surname="kaya"
        isLoggedIn={isLoggedIn}
        friends={["ahmet", "mehmet", "veli"]}
      ></User>
    </>
  );
}

export default App;

{
  /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{`burada jsx içerisinde jsx den kaçıp tekrar jsx kullandım ${jsDegiskeni}`}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="xyz">boş bir class</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
}
