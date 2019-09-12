import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import * as a from "../actions";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => {
  return {
    root: {},
    input: {}
  };
});

const Navigation = ({}) => {
  const classes = useStyles();
  return (
    <Toolbar>
      <Typography variant="h6" noWrap>
        MindGraph
      </Typography>
    </Toolbar>
  );
};

const NavigationContainer = connect(
  (state, ownProps) => ({}),
  (dispatch, ownProps) => ({})
)(Navigation);

export { NavigationContainer };
