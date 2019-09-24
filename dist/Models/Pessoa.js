"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');







const PessoaSchema = new (0, _mongoose.Schema)({
  email: String,
  name: String,
  password: String
})

exports. default = _mongoose.model('Pessoa', PessoaSchema)
