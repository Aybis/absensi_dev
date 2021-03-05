import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Page/Home';
import Index from './Page/Index';
import NotFound from './Page/NotFound';
import Report from './Page/Report';
import Dashboard from './Page/Dashboard';
import DashboardDetail from './Page/DashboardDetail';
import User from './Page/User';


function App() {
  return (
      <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={Index} exact={true} />
                <Route path="/dashboard" component={Dashboard}  />
                <Route path="/dashboard-detail" component={DashboardDetail}  />
                <Route path="/user" component={User}  />
                <Route path="/home" component={Home}  />
                <Route path="/report" component={Report} />
                <Route path="/*" component={NotFound} />
            </Switch>
        </div>
       </BrowserRouter>
  );
}

export default App;
