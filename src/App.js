import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

// Components
import Home from './components/organisms/Home';
import Contests from './components/organisms/Contests';
import Transactions from './components/organisms/Transactions';
import { NotFound } from './components/atoms/404';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/contest' component={Contests}/>
          <Route exact path='/wallet' component={Transactions}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
