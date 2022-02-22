import React from 'react';
import './App.module.css';
import Header from "./header/Header";
import Main from "./main/Main";
import About from "./about/About";
import Skills from "./skills/Skills";
import Works from "./works/Works";
import Contacts from "./Contacts/Contacts";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="App">
		<Header/>
		<Main/>
		<About/>
		<Skills/>
		<Works/>
		<Contacts/>
		<Footer/>
    </div>
  );
}

export default App;
