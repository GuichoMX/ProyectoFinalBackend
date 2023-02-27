"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropiedadController = void 0;
const apollo_server_errors_1 = require("apollo-server-errors");
// import { sequelize } from "../db";
const Propiedad_1 = __importDefault(require("../db/model/Propiedad"));
class PropiedadController {
    async getPropiedades() {
        return await Propiedad_1.default.findAll();
    }
    async getPropiedad(id_propiedad) {
        return await Propiedad_1.default.findOne({
            where: { id_propiedad }
        });
    }
    async saveNewPropiedad(propiedad) {
        return await Propiedad_1.default.create({ ...propiedad });
    }
    async savePropiedad(id_propiedad, nombre, direccion, fecha_inicio, fecha_final, max_personas, id_usuario, hecho) {
        return await Propiedad_1.default.create({ id_propiedad, nombre, direccion, fecha_inicio, fecha_final, max_personas, id_usuario, hecho });
    }
    async updatePropiedad(id_propiedad, nombre, direccion, fecha_inicio, fecha_final, max_personas, id_usuario, hecho) {
        const propiedad = await Propiedad_1.default.findOne({
            where: { id_propiedad } // es una notación corta de where: { asin: asin }
        });
        // si existe procedemos a actualizar
        if (propiedad) {
            await Propiedad_1.default.update({ id_propiedad, nombre, direccion, fecha_inicio, fecha_final, max_personas, id_usuario, hecho }, {
                where: { id_propiedad } // es una notación corta de where: { asin: asin }
            });
            // regresamos el libro reciéntemente actualizado
            return await Propiedad_1.default.findOne({ where: { id_propiedad } });
        }
        // en caso contrario, lanzamos mensaje y código de error
        else {
            throw new apollo_server_errors_1.ApolloError('Propiedad not found', 'ERR003');
        }
    }
}
exports.PropiedadController = PropiedadController;
