"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const PropiedadController_1 = require("./controller/PropiedadController");
const UserController_1 = require("./controller/UserController");
const HuespedController_1 = require("./controller/HuespedController");
const AuthAPI_1 = require("./controller/AuthAPI");
const propiedadController = new PropiedadController_1.PropiedadController();
const huespedController = new HuespedController_1.HuespedController();
const userController = new UserController_1.UserController();
const AuthController = new AuthAPI_1.AuthAPI();
exports.resolvers = {
    Query: {
        getAllPropiedades: (_, __, { token }) => {
            return AuthController.verifyToken(token) && propiedadController.getPropiedades();
        },
        getPropiedad: (_, { id_propiedad }, { token }) => {
            return AuthController.verifyToken(token) && propiedadController.getPropiedad(id_propiedad);
        },
        getAllHuespedes: (_, __, { token }) => {
            return AuthController.verifyToken(token) && huespedController.getHuespedes();
        },
        getHuesped: (_, { id_usuario }, { token }) => {
            return AuthController.verifyToken(token) && huespedController.getHuesped(id_usuario);
        }
    },
    Mutation: {
        insertPropiedad: (_, { id_propiedad, nombre, direccion, fecha_inicio, fecha_final, max_personas, id_usuario, hecho }, { token }) => {
            return AuthController.verifyToken(token) && propiedadController.savePropiedad(id_propiedad, nombre, direccion, fecha_inicio, fecha_final, max_personas, id_usuario, hecho);
        },
        updatePropiedad: async (_, { id_propiedad, nombre, direccion, fecha_inicio, fecha_final, max_personas, id_usuario, hecho }, { token }) => {
            return AuthController.verifyToken(token) && propiedadController.updatePropiedad(id_propiedad, nombre, direccion, fecha_inicio, fecha_final, max_personas, id_usuario, hecho);
        },
        insertPropiedades: (_, { input: propiedad }) => {
            return propiedadController.saveNewPropiedad(propiedad);
        },
        insertHuesped: (_, { id_usuario, nombres, apellidoP, apellidoM, edad, pais, ciudad, num_contacto, num_referencia, genero, propiedadAsignada }, { token }) => {
            return AuthController.verifyToken(token) && huespedController.saveHuesped(id_usuario, nombres, apellidoP, apellidoM, edad, pais, ciudad, num_contacto, num_referencia, genero, propiedadAsignada);
        },
        insertHuespedes: (_, { input: huesped }) => {
            return huespedController.saveNewHuesped(huesped);
        },
        updateHuesped: async (_, { id_usuario, nombres, apellidoP, apellidoM, edad, pais, ciudad, num_contacto, num_referencia, genero, propiedadAsignada }, { token }) => {
            return AuthController.verifyToken(token) && huespedController.updateHuesped(id_usuario, nombres, apellidoP, apellidoM, edad, pais, ciudad, num_contacto, num_referencia, genero, propiedadAsignada);
        },
        signUp: async (_, { input: user }) => {
            return userController.saveUser(user);
        },
        signIn: async (_, { email, password }) => {
            return userController.getUserToken(email, password);
        }
    }
};
