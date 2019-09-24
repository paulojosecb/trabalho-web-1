"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);

class App {
    

    constructor () {;App.prototype.__init.call(this);App.prototype.__init2.call(this);App.prototype.__init3.call(this);
      this.express = _express2.default.call(void 0, )

      this.middlewares()
      this.database()
      this.routes()
    }

     __init() {this.middlewares = () => {
      this.express.use(_express2.default.json())
      this.express.use(_cors2.default.call(void 0, ))
      this.express.use(_express2.default.static('public'))
    }}

     __init2() {this.database = () => {
      _mongoose2.default.connect('mongodb://paulocardosob:A13853211b@ds219308.mlab.com:19308/notes', {
        useNewUrlParser: true,
        useFindAndModify: false
      })

      _mongoose2.default.connection.on('error', (err) => {
        console.log(err)
      })
    }}

     __init3() {this.routes = () => {
      this.express.use(_routes2.default)
    }}
}

exports. default = new App().express
