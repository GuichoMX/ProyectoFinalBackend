import { Model, InferAttributes, InferCreationAttributes, DataTypes } from "sequelize"
import { sequelize } from ".."

export default class Propiedad extends Model<InferAttributes<Propiedad>, InferCreationAttributes<Propiedad>>{
    declare id_propiedad: number
    declare nombre: string
    declare direccion: string
    declare fecha_inicio: Date
    declare fecha_final: Date
    declare max_personas: number
    declare id_usuario: number
    declare hecho: number
}

Propiedad.init({
    id_propiedad: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha_inicio: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    fecha_final: {
        type: DataTypes.DATE,
        allowNull: false,
    },
     max_personas: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    id_usuario: {
        type: DataTypes.NUMBER,        
        allowNull: false,
    },
    hecho: {
        type: DataTypes.NUMBER,        
        allowNull: false,
    },
}, {
    timestamps: true,
    sequelize
}); 