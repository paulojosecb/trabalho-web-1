import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

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
      this.express.use(express.static('public'))
    }

    private database = (): void => {
      mongoose.connect('mongodb://paulocardosob:A13853211b@ds219308.mlab.com:19308/notes', {
        useNewUrlParser: true,
        useFindAndModify: false
      })

      mongoose.connection.on('error', (err) => {
        console.log(err)
      })
    }

    private routes = (): void => {
      this.express.use(router)
    }
}

export default new App().express
