import { Request, Response } from 'express'

class PessoaController {
    public index = async (req: Request, res: Response): Promise<Response> => {
      return res.send('hello world')
    }

    public create = async (req: Request, res: Response): Promise<Response> => {
      return res.send('Created')
    }

    public update = async (req: Request, res: Response): Promise<Response> => {
      return res.send('Updated')
    }

    public delete = async (req: Request, res: Response): Promise<Response> => {
      return res.send('Deleted')
    }
}

export default new PessoaController()
