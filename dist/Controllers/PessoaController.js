"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});

var _Pessoa = require('../Models/Pessoa'); var _Pessoa2 = _interopRequireDefault(_Pessoa);

class PessoaController {constructor() { PessoaController.prototype.__init.call(this);PessoaController.prototype.__init2.call(this);PessoaController.prototype.__init3.call(this);PessoaController.prototype.__init4.call(this); }
     __init() {this.index = async (req, res) => {
      const pessoas = await _Pessoa2.default.find()
      return res.json(pessoas)
    }}

     __init2() {this.create = async (req, res) => {
      const pessoa = await _Pessoa2.default.create(req.body)
      return res.json(pessoa)
    }}

     __init3() {this.update = async (req, res) => {
      try {
        const query = { _id: req.query.id }
        const pessoa = await _Pessoa2.default.findOneAndUpdate(query, req.body)
        return res.json(pessoa)
      } catch (error) {
        return res.json(error)
      }
    }}

     __init4() {this.delete = async (req, res) => {
      try {
        const query = { _id: req.query.id }
        const pessoa = await _Pessoa2.default.findOneAndDelete(query)
        return res.json(pessoa)
      } catch (error) {
        return res.json(error)
      }
    }}
}

exports. default = new PessoaController()
