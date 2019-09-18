import { Request, Response } from 'express'

import Pessoa from '../Models/Pessoa'

class PessoaController {
    public index = async (req: Request, res: Response): Promise<Response> => {
      const pessoas = await Pessoa.find()
      return res.json(pessoas)
    }

    public create = async (req: Request, res: Response): Promise<Response> => {
      const pessoa = await Pessoa.create(req.body)
      return res.json(pessoa)
    }

    public update = async (req: Request, res: Response): Promise<Response> => {
      try {
        const query = { _id: req.query.id }
        const pessoa = await Pessoa.findOneAndUpdate(query, req.body)
        return res.json(pessoa)
      } catch (error) {
        return res.json(error)
      }
    }

    public delete = async (req: Request, res: Response): Promise<Response> => {
      try {
        const query = { _id: req.query.id }
        const pessoa = await Pessoa.findOneAndDelete(query)
        return res.json(pessoa)
      } catch (error) {
        return res.json(error)
      }
    }
}

export default new PessoaController()
