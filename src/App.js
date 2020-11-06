import React from 'react';
import {Route, BrowserRouter, Switch } from 'react-router-dom';


import ListPredmeti from './components/PredmetiList'
import Predmet from './components/Predmet'
import OcjeneList from './components/OcjeneList'
import Ocjena from './components/Ocjena'
import OsobeList from './components/OsobeList'
import Osoba from './components/Osoba'
import OsobaDetails from './components/OsobaDetails'
import SideBar from './components/SideBar'
import OcjenaForm from './components/OcjenaForm'

import './app.css';

function App() {
  return (
    <BrowserRouter>
    <SideBar />
      <div className="routes">
        <Switch>
          <Route path="/" exact component = {ListPredmeti} />

          <Route path="/predmeti" component = {ListPredmeti} />
          <Route path="/predmet/:id" component = {Predmet} />

          <Route path="/ocjene" component = { OcjeneList } />
          <Route path="/ocjena/:id" component = { Ocjena } />
          <Route path="/ocjenaform" component = { OcjenaForm } />

          <Route path="/osobe" component = { OsobeList } />
          <Route path="/osoba/:id" component = { Osoba } />
          <Route path="/osobaDetails/:id" component = { OsobaDetails } />
          
        </Switch>
      </div> 
    </BrowserRouter>
  );
}

export default App;
