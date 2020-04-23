import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';

import './scss/base.scss';
import './scss/app.scss';
import './scss/responsive.scss';

import routes from './routes';
import { connect } from 'react-redux';
import * as actions from './actions/index';

class App extends Component {
  
  componentDidMount = () => {
    this.props.onAllData();
  }

  showContentMenu = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((item, index) => {
        return  <Route
                  key={index}
                  path={item.path}
                  exact={item.exact}
                  component={item.main}
                >
                </Route>
      })
    }
    return result;
  }

  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header />
          <Switch>
            {this.showContentMenu(routes)}
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch,props) => {
  return {
      onAllData: () => {
          dispatch(actions.getApiProducts());
      }
  }
}

export default connect(null,mapDispatchToProps)(App);

// export default App;
