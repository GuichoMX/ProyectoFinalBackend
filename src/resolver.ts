import { PropiedadController } from "./controller/PropiedadController"
import { UserController } from "./controller/UserController"
import { HuespedController } from "./controller/HuespedController"
import { verifyToken } from "./auth"
import { compare, hash } from 'bcrypt'
import { ApolloError } from "apollo-server-errors"
import { AuthAPI } from "./controller/AuthAPI"
import { Token } from "graphql"

const propiedadController = new PropiedadController()
const huespedController = new HuespedController()
const userController = new UserController()
const AuthController = new AuthAPI()


export const resolvers = {
    Query: {
        getAllPropiedades: (_, __, { token }) => {
            return AuthController.verifyToken(token) && propiedadController.getPropiedades()
        },
        getPropiedad: (_, { id_propiedad }, { token }) => {
            return AuthController.verifyToken(token) && propiedadController.getPropiedad(id_propiedad)
        },
        getAllHuespedes: (_, __, { token }) => {
            return AuthController.verifyToken(token) && huespedController.getHuespedes()
        },
        getHuesped: (_, { id_usuario }, { token }) => {
            return AuthController.verifyToken(token) && huespedController.getHuesped(id_usuario)
        }
    },
    Mutation: {
        insertPropiedad: (_, { id_propiedad, nombre, direccion, fecha_inicio, fecha_final, max_personas, id_usuario}, {token}) => {
            return AuthController.verifyToken(token) && propiedadController.savePropiedad(id_propiedad, nombre, direccion, fecha_inicio, fecha_final, max_personas, id_usuario)
        },
        updatePropiedad: async (_, { id_propiedad, nombre, direccion, fecha_inicio, fecha_final, max_personas, id_usuario}, {token}) => {
            return AuthController.verifyToken(token) && propiedadController.savePropiedad(id_propiedad, nombre, direccion, fecha_inicio, fecha_final, max_personas, id_usuario)
        },
        insertHuesped: (_, { id_usuario, nombres, apellidoP, apellidoM, edad, pais, ciudad, num_contacto, num_referencia}, {token}) => {
            return AuthController.verifyToken(token) && huespedController.saveHuesped(id_usuario, nombres, apellidoP, apellidoM, edad, pais, ciudad, num_contacto, num_referencia)
        },
        updateHuesped: async (_, { id_usuario, nombres, apellidoP, apellidoM, edad, pais, ciudad, num_contacto, num_referencia }, {token}) => {
            return AuthController.verifyToken(token) && huespedController.updateHuesped(id_usuario, nombres, apellidoP, apellidoM, edad, pais, ciudad, num_contacto, num_referencia)
        },
        signUp: async (_, { input: user }) => {
            return userController.saveUser(user)
        },
        signIn: async (_, { email, password }) => {
            return userController.getUserToken(email, password)
        }
    }
} 