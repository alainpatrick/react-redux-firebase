"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var wrapInDispatch = exports.wrapInDispatch = function wrapInDispatch(dispatch, _ref) {
  var method = _ref.method,
      args = _ref.args,
      types = _ref.types;

  dispatch({
    type: types[0]
  });
  return method.apply(undefined, _toConsumableArray(args)).then(function (val) {
    dispatch({
      type: types[1],
      payload: val
    });
  }).catch(function (err) {
    dispatch({
      type: types[2],
      payload: err
    });
  });
};