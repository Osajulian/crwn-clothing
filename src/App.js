import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Homepage from './pages/homepage/homepage-component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component';
import CollectionPreview from './components/collection-preview/collection-preview.component';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component';
import { auth, createUserProfileDocument } from '../src/firebase/firebase.utils';

import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null
  
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      } else {
        this.setState({
          currentUser: userAuth
        })
      }
      
     
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
  return (
    <div>
    <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='shop/preview' component={CollectionPreview} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}
}

export default App;
