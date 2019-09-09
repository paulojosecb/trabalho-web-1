import express from 'express'
import cors from 'cors'

import router from './routes'

class App {
    public express: express.Application

    constructor () {
      this.express = express()

      this.middlewares()
      this.database()
      this.routes()
    }

    private middlewares = (): void => {
      this.express.use(express.json())
      this.express.use(cors())
    }

    private database = (): void => {

    }

    private routes = (): void => {
      this.express.use(router)
    }
}

export default new App().express
