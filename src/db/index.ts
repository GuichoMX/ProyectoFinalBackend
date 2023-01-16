import { Sequelize, DataTypes } from 'sequelize'
import { logger } from '../logger'
import Propiedad from './model/Propiedad'
import Huesped from './model/Huesped'
import User from './model/User'


export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: msg => logger.debug(msg)
})

//Propiedad.hasOne(Huesped, {foreignKey: 'id_usuario', as: 'userRelation'})

//Huesped.belongsTo(Propiedad, {foreignKey: 'id_usuario', as: 'productRelation'})

if(process.env.NODE_ENV !== 'productivo'){
    const syncDB = async () => await sequelize.sync()
    syncDB()
}