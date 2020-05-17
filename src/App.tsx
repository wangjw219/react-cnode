import React from 'react';
import Home from 'pages/Home';
import Detail from 'pages/Detail';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <React.StrictMode>
      <Router>
          <Switch>
            <Route path="/detail/:id" component={Detail}></Route>
            <Route path="/" component={Home}>
            </Route>
          </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;
