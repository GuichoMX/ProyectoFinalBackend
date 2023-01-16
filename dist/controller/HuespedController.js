"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HuespedController = void 0;
const apollo_server_errors_1 = require("apollo-server-errors");
// import { sequelize } from "../db";
const Huesped_1 = __importDefault(require("../db/model/Huesped"));
class HuespedController {
    async getHuespedes() {
        return await Huesped_1.default.findAll();
    }
    async getHuesped(id_usuario) {
        return await Huesped_1.default.findOne({
            where: { id_usuario }
        });
    }
    async saveHuesped(id_usuario, nombres, apellidoP, apellidoM, edad, pais, ciudad, num_contacto, num_referencia) {
        return await Huesped_1.default.create({ id_usuario, nombres, apellidoP, apellidoM, edad, pais, ciudad, num_contacto, num_referencia });
    }
    async updateHuesped(id_usuario, nombres, apellidoP, apellidoM, edad, pais, ciudad, num_contacto, num_referencia) {
        const huesped = await Huesped_1.default.findOne({
            where: { id_usuario } // es una notación corta de where: { asin: asin }
        });
        // si existe procedemos a actualizar
        if (huesped) {
            await Huesped_1.default.update({ id_usuario, nombres, apellidoP, apellidoM, edad, pais, ciudad, num_contacto, num_referencia }, {
                where: { id_usuario } // es una notación corta de where: { asin: asin }
            });
            // regresamos el libro reciéntemente actualizado
            return await Huesped_1.default.findOne({ where: { id_usuario } });
        }
        // en caso contrario, lanzamos mensaje y código de error
        else {
            throw new apollo_server_errors_1.ApolloError('Live not found', 'ERR003');
        }
    }
}
exports.HuespedController = HuespedController;
