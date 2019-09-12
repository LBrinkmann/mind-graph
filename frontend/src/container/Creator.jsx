import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import * as a from "../actions";

const useStyles = makeStyles(theme => {
  return {
    root: {},
    input: {}
  };
});

const Creator = ({}) => {
  const classes = useStyles();
  return null;
};

const CreatorContainer = connect(
  (state, ownProps) => ({}),
  (dispatch, ownProps) => ({})
)(Creator);

export { CreatorContainer };
