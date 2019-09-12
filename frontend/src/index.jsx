import "./css/main.css";

import React from "react";
import ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { createLogger } from "redux-logger";

import epics from "./epics";
import reducers from "./reducer";
import * as a from "./actions";

import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";

import { CreatorContainer } from "./container/Creator";
import { NavigationContainer } from "./container/Navigation";


const styles = theme => ({
  root: {
    display: "flex"
  }
});

class Index extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    const { classes} = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <NavigationContainer />
        </AppBar>
        <CreatorContainer className={classes.container}/>
      </div>
    );
  }
}

//
const epicMiddleware = createEpicMiddleware();

const logger = createLogger({
  predicate: (getState, action) => action.logLevel
});

const middlewares = [logger, epicMiddleware];
const enhancer = compose(applyMiddleware(...middlewares));
const initalState = {};
const store = createStore(reducers, initalState, enhancer);
epicMiddleware.run(epics);

const StyledIndex = withStyles(styles)(
  connect(
    (state, ownProps) => ({}),
    (dispatch, ownProps) => ({
    })
  )(Index)
);

ReactDOM.render(
  <Provider store={store}>
    <StyledIndex />
  </Provider>,
  document.getElementById("index")
);
