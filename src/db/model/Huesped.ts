import { Model, InferAttributes, InferCreationAttributes, DataTypes } from "sequelize"
import { sequelize } from ".."

export default class Huesped extends Model<InferAttributes<Huesped>, InferCreationAttributes<Huesped>>{
    declare id_usuario: number
    declare nombres: string
    declare apellidoP: string
    declare apellidoM: string
    declare edad: number
    declare pais: string
    declare ciudad: string
    declare num_contacto: string
    declare num_referencia: string
    declare genero: string
    declare propiedadAsignada: string
}

Huesped.init({
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombres: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellidoP: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellidoM: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    pais: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ciudad: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    num_contacto: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    num_referencia: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    propiedadAsignada: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: true,
    sequelize
}); 