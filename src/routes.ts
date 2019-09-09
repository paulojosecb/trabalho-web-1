import { Router } from 'express'

import PessoaController from './Controllers/PessoaController'

const router = Router()

router.get('/pessoa', PessoaController.index)
router.post('/pessoa', PessoaController.create)
router.put('/pessoa', PessoaController.update)
router.delete('/pessoa', PessoaController.delete)

export default router
