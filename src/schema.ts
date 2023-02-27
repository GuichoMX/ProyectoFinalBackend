import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Query {
    getAllPropiedades: [Propiedad],
    getPropiedad(id_propiedad:ID!): Propiedad,
    getAllHuespedes: [Huesped],
    getHuesped(id_usuario:ID!): Huesped,
  }
  type Mutation {
    insertPropiedad(id_propiedad:ID!,nombre:String, direccion:String, fecha_inicio:String, fecha_final:String, max_personas:Int, id_usuario:Int, hecho:Int): Propiedad,
    updatePropiedad(id_propiedad:ID!,nombre:String, direccion:String, fecha_inicio:String, fecha_final:String, max_personas:Int, id_usuario:Int, hecho:Int): Propiedad,
    insertPropiedades(input: PropiedadInput): Propiedad,
    insertHuesped(id_usuario: Int, nombres: String, apellidoP: String, apellidoM: String,edad: Int, pais: String, ciudad: String, num_contacto: String, num_referencia: String, genero: String, propiedadAsignada: String): Huesped,
    insertHuespedes(input: HuespedInput): Huesped,
    updateHuesped(id_usuario: Int, nombres: String, apellidoP: String, apellidoM: String,edad: Int, pais: String, ciudad: String, num_contacto: String, num_referencia: String, genero: String, propiedadAsignada: String): Huesped,
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
    id_usuario: Int,
    hecho: Int
  }

  input PropiedadInput{
    nombre: String,
    direccion: String,
    fecha_inicio: String,
    fecha_final: String,
    max_personas: Int,
    id_usuario: Int,
    hecho: Int
  }

  type Huesped {
    id_usuario: Int,
    nombres: String,
    apellidoP: String,
    apellidoM: String,
    edad: Int,
    pais: String,
    ciudad: String,
    num_contacto: String,
    num_referencia: String,
    genero: String,
    propiedadAsignada: String
  }

  input HuespedInput {
    nombres: String,
    apellidoP: String,
    apellidoM: String,
    edad: Int,
    pais: String,
    ciudad: String,
    num_contacto: String,
    num_referencia: String,
    genero: String,
    propiedadAsignada: String
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