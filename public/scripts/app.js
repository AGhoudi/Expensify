'use strict';

var _React = require('React');

var _React2 = _interopRequireDefault(_React);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var template = _React2.default.createElement(
    'p',
    null,
    'This is JSX'
);

_reactDom2.default.render(template, document.getElementById('app'));
