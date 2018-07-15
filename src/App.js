import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Warehouse';

class App extends React.Component {
  render() {
    return (
       <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/warehouse/" component={Shop}/>
          <Route path="/warehouse/:item" component={Shop}/>
        </Switch>
      </BrowserRouter>
     
    );
  }
}

export default App;
