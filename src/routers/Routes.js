import React from 'react';
import {Route, BrowserRouter, Switch } from 'react-router-dom';

import ListPredmeti from '../components/PredmetiList'
import OsobaDetails from '../components/OsobaDetails'
import OsobaForm from '../components/forms/OsobaForm'
import OsobeList from '../components/OsobeList'
import OcjenaForm from '../components/forms/OcjenaForm'
import OcjeneList from '../components/OcjeneList'
import PredmetForm from '../components/forms/PredmetForm'
import SideBar from '../components/static/SideBar'


import '../styles/app.css';

const Routes = () => {
  return (
    <BrowserRouter>
    <SideBar />
      <div className="routes">
        <Switch>
          <Route path="/" exact component = {ListPredmeti} />

          <Route path="/predmeti" component = {ListPredmeti} />
          <Route path="/predmet/:id" component = {PredmetForm} />

          <Route path="/ocjene" component = { OcjeneList } />
          <Route path="/ocjenaform" component = { OcjenaForm } />

          <Route path="/osobe" component = { OsobeList } />
          <Route path="/osoba/:id" component = { OsobaForm } />
          <Route path="/osobaDetails/:id" component = { OsobaDetails } />
        </Switch>
      </div> 
    </BrowserRouter>
  );
}

export default Routes;
