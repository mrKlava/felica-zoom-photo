import React from "react";

import { Header, About, Services, Reviews, Footer } from './containers'

import './App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Services/>
      <Reviews/>
      <Footer/>
    </div>
  );
}

export default App;
