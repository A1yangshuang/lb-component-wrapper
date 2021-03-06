'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _table = require('antd/es/table');

var _table2 = _interopRequireDefault(_table);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/es/table/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableWrapper = function (_Component) {
  _inherits(TableWrapper, _Component);

  function TableWrapper() {
    _classCallCheck(this, TableWrapper);

    return _possibleConstructorReturn(this, (TableWrapper.__proto__ || Object.getPrototypeOf(TableWrapper)).apply(this, arguments));
  }

  _createClass(TableWrapper, [{
    key: 'shouldComponentUpdate',

    // FIXME 添加完整的table组件刷新条件
    value: function shouldComponentUpdate(nextProps, nextState) {
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_table2.default, this.props);
    }
  }]);

  return TableWrapper;
}(_react.Component);

exports.default = TableWrapper;