import * as a from "../actions";
import { BACKEND_URL } from "../config";

import { ajax } from "rxjs/ajax";
import { combineEpics, ofType } from "redux-observable";
import { of } from "rxjs";
import {
  flatMap,
  map,
  catchError,
  concatMap,
  tap,
  withLatestFrom,
  filter,
  debounceTime,
  throttleTime
} from "rxjs/operators";

const createRequest = (action, state) => ({});

const fooBar = (action$, state$) =>
  action$.pipe(
    ofType("FOO_BAR"),
    withLatestFrom(state$),
    concatMap(([action, state]) =>
      ajax
        .post(BACKEND_URL, createBlocksDeleteRequest(action, state), headers)
        .pipe(map(({ response }) => a.blabla(response)))
    ),
    catchError(val => of(a.error("Could not foo bar.", val)))
  );

const epics = combineEpics(fooBar);

export default epics;
