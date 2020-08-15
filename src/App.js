import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Homepage from './pages/homepage/homepage-component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component';
import CollectionPreview from './components/collection-preview/collection-preview.component';

import './App.css';

function App() {
  return (
    <div>
    <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='shop/preview' component={CollectionPreview} />
      </Switch>
    </div>
  );
}

export default App;
