import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import App from './components/App';
import DatosPage from './components/DatosPage';
import GraficosPage from './components/GraficosPage';
import AnalisisPage from './components/AnalisisPage';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <IndexRoute component={DatosPage} />
    <Route path="/pages/graph" component={GraficosPage} />
    <Route path="/pages/analisis" component={AnalisisPage} />
  </Route>
);