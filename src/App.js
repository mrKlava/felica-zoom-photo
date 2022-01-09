import React from "react";
import { useTranslation, Trans } from 'react-i18next';


import { Header, About, Services, Reviews, Footer } from './containers'
import { Navbar } from './components'

import './App.css'

function App() {

	const { t } = useTranslation();


    return (
	  	<div className="App">
			<Navbar data={ t('data.navbar')} />
      		<Header data={ t('data.header') } />
      		<About data={ t('data.about') } />
      		<Services data={ t('data.services') } />
      		<Reviews data={ t('data.reviews') } />
      		<Footer data={ t('data.contacts') } />
      	</div>
    );
}

export default App;
