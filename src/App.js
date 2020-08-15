import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Homepage from './pages/homepage/homepage-component';
import ShopPage from './pages/shop/shop.component'

import './App.css';
import CollectionPreview from './components/collection-preview/collection-preview.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='shop/preview' component={CollectionPreview} />
      </Switch>
    </div>
  );
}

export default App;
