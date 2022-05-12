import React from 'react';
import './App.css';
import Header from './components/layout/header';
import Nav from './components/layout/nav';
import Footer from './components/layout/footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import NovedadesPage from './pages/NovedadesPage';

function App() {
  return (
    <Router>
      <Header/>
      <Nav/>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/servicios" exact component={ServicesPage}/>
        <Route path="/novedades" exact component={NovedadesPage}/>
        <Route path="/contacto" exact component={ContactPage}/>
      </Switch>
      <Footer/>
    </Router>
    );
}

export default App;
