"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const __1 = require("..");
class Propiedad extends sequelize_1.Model {
}
exports.default = Propiedad;
Propiedad.init({
    id_propiedad: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    direccion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    fecha_inicio: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    fecha_final: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    max_personas: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
    id_usuario: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
}, {
    timestamps: true,
    sequelize: __1.sequelize
});
