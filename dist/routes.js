"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');

var _PessoaController = require('./Controllers/PessoaController'); var _PessoaController2 = _interopRequireDefault(_PessoaController);

const router = _express.Router.call(void 0, )

router.get('/pessoa', _PessoaController2.default.index)
router.post('/pessoa', _PessoaController2.default.create)
router.put('/pessoa', _PessoaController2.default.update)
router.delete('/pessoa', _PessoaController2.default.delete)

exports. default = router
