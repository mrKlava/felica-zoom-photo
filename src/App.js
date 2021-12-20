import React from "react";

import { Header, About, Services, Reviews, Footer } from './containers'
import { Navbar } from './components'

import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Reviews/>
      <Footer/>
    </div>
  );
}

export default App;
