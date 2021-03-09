import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Abensi from './Layout/Absensi';
import Apps from './Layout/Apps';
import Login from './Page/Login';
import LoginSuccess from './Page/LoginSuccess';
import NotFound from './Page/NotFound';
import { ProtectedRoute } from './utils/protectedRoute';


function App() {
  return (
      <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={Login} exact={true} />
                <ProtectedRoute path="/success" component={LoginSuccess} exact={true} />
                <Route path="/*" component={NotFound} />
            </Switch>
        </div>
       </BrowserRouter>
  );
}

export default App;
