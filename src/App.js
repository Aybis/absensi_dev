import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../src/Layout/Index';
import Apps from './Page/Apps';
import NotFound from './Page/NotFound';
import Report from './Page/Report';
import User from './Page/User';


function App() {
  return (
      <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={Apps} exact={true} />
                <Route path="/absen" component={Layout} exact={true} />
                <Route path="/user" component={User}  />
                <Route path="/report" component={Report} />
                <Route path="/*" component={NotFound} />
            </Switch>
        </div>
       </BrowserRouter>
  );
}

export default App;
