import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavStyle from './components/Nav/Nav'
import Header from './components/Header/Header'
import Habilidades,{Sobre} from './components/Main/Main';
import Portifolio from './components/Portifolio/Portifolio';
import Footer from './components/Footer/Footer'
// import Contato from './components/Contato/Contato'
import './App.css';

function App() {
  return (
    <div className="App">
      <Fragment>
      <NavStyle/>
      <Header/>
      <Habilidades/>
      <Sobre/>
      <Portifolio/>
      {/* <Contato/> */}
      <Footer/>
      </Fragment>
    </div>
  );
}

export default App;
