'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = require('antd/es/input');

var _input2 = _interopRequireDefault(_input);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/es/input/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _compare = require('../utils/compare');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextArea = _input2.default.TextArea;

var TextAreaWrapper = function (_Component) {
  _inherits(TextAreaWrapper, _Component);

  function TextAreaWrapper() {
    _classCallCheck(this, TextAreaWrapper);

    return _possibleConstructorReturn(this, (TextAreaWrapper.__proto__ || Object.getPrototypeOf(TextAreaWrapper)).apply(this, arguments));
  }

  _createClass(TextAreaWrapper, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !(0, _compare.formBaseCompare)(this.props, nextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.read) {
        return _react2.default.createElement(
          'span',
          null,
          this.props.value
        );
      }

      return _react2.default.createElement(TextArea, this.props);
    }
  }]);

  return TextAreaWrapper;
}(_react.Component);

exports.default = TextAreaWrapper;