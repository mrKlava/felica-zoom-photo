import React from "react";


import { Header, About, Services, Reviews, Footer } from './containers'
import { Navbar } from './components'

import './App.css'

import { data } from './assets/data/data'

function App() {
  return (
    <div className="App">
    	<Navbar data={ data.navbar } />
    	<Header data={ data.header } />
    	<About data={ data.about } />
    	<Services data={ data.services } />
    	<Reviews data={ data.reviews } />
    	<Footer data={ data.contacts } />
    </div>
  );
}

export default App;
