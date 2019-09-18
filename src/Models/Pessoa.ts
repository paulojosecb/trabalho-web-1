import { Schema, model, Document } from 'mongoose'

interface PessoaInterface extends Document {
    email: string,
    name: string,
    password: string
}

const PessoaSchema = new Schema({
  email: String,
  name: String,
  password: String
})

export default model<PessoaInterface>('Pessoa', PessoaSchema)
