import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import {Home} from './Home.jsx'
import {Shori_Company} from './Shori_Company.jsx'

// ルーティング
function Example() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/Shori_Company">
                    <Shori_Company />
                </Route>
            </Switch>
        </Router>
    );
}

export default Example;

if (document.getElementById('app')) {
    ReactDOM.render(<Example />, document.getElementById('app'));
}
