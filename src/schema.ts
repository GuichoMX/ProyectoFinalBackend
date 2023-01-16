import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Query {
    getAllPropiedades: [Propiedad],
    getPropiedad(id_propiedad:ID!): Propiedad,
    getAllHuespedes: [Huesped],
    getHuesped(id_usuario:ID!): Huesped,
  }
  type Mutation {
    insertPropiedad(id_propiedad:ID!,nombre:String, direccion:String, fecha_inicio:String, fecha_final:String, max_personas:Int, id_usuario:Int): Propiedad,
    updatePropiedad(id_propiedad:ID!,nombre:String, direccion:String, fecha_inicio:String, fecha_final:String, max_personas:Int, id_usuario:Int): Propiedad,
    insertHuesped(id_usuario: Int, nombres: String, apellidoP: String, apellidoM: String,edad: Int, pais: String, ciudad: String, num_contacto: String, num_referencia: String): Huesped,
    updateHuesped(id_usuario: Int, nombres: String, apellidoP: String, apellidoM: String,edad: Int, pais: String, ciudad: String, num_contacto: String, num_referencia: String): Huesped,
    signUp(input: UserInput): User,
    signIn(email: String!, password: String!): String
  }
  type Propiedad {
    id_propiedad: ID,
    nombre: String,
    direccion: String,
    fecha_inicio: String,
    fecha_final: String,
    max_personas: Int,
    id_usuario: Int
  }

  type Huesped {
    id_usuario: ID,
    nombres: String,
    apellidoP: String,
    apellidoM: String,
    edad: Int,
    pais: String,
    ciudad: String,
    num_contacto: String,
    num_referencia: String
  }

  type User {
    id: Int
    name: String
    lastname: String
    email: String
    isAdmin: Boolean
  }

  input UserInput {
    name: String
    lastname: String
    email: String!
    password: String!
    isAdmin: Boolean
  }
`