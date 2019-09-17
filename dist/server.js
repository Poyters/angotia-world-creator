"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.get('/', function (req, res) {
  return res.send('Angotia Map creator API');
});
app.listen(4500, function () {
  return console.log('Now, server is listening on port 4500');
});