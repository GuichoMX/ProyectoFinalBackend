"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const __1 = require("..");
class Huesped extends sequelize_1.Model {
}
exports.default = Huesped;
Huesped.init({
    id_usuario: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombres: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    apellidoP: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    apellidoM: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    edad: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    pais: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    ciudad: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    num_contacto: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    num_referencia: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: true,
    sequelize: __1.sequelize
});
