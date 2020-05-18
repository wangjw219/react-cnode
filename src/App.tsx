import React from 'react';
import Home from 'pages/Home';
import DetailHook from 'pages/DetailHook';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route path="/detail/:id" component={DetailHook} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;
