import { ApolloError } from "apollo-server-errors";
// import { sequelize } from "../db";
import Huesped from "../db/model/Huesped";

export class HuespedController{
    async getHuespedes(){
        return await Huesped.findAll()
    }

    async getHuesped(id_usuario: number){
        return await Huesped.findOne({
            where: { id_usuario }
        })
    }

    async saveNewHuesped(huesped: Huesped){
        return await Huesped.create({...huesped})
    }

    async saveHuesped(id_usuario: number, nombres: string, apellidoP: string, apellidoM: string,edad: number, pais: string, ciudad: string, num_contacto: string, num_referencia: string, genero: string, propiedadAsignada: string){
        return await Huesped.create({id_usuario, nombres, apellidoP, apellidoM, edad, pais, ciudad, num_contacto, num_referencia, genero, propiedadAsignada})
    }

    async updateHuesped(id_usuario: number, nombres: string, apellidoP: string, apellidoM: string,edad: number, pais: string, ciudad: string, num_contacto: string, num_referencia: string, genero: string, propiedadAsignada: string){
        const huesped = await Huesped.findOne({
            where: { id_usuario } // es una notación corta de where: { asin: asin }
        })
        // si existe procedemos a actualizar
        if (huesped) {
            await Huesped.update({ id_usuario, nombres, apellidoP, apellidoM,edad, pais, ciudad, num_contacto, num_referencia, genero, propiedadAsignada}, {
                where: { id_usuario } // es una notación corta de where: { asin: asin }
            })
            // regresamos el libro reciéntemente actualizado
            return await Huesped.findOne({ where: { id_usuario } })
        }
        // en caso contrario, lanzamos mensaje y código de error
        else {
            throw new ApolloError('Live not found', 'ERR003')
        }
        
    }
}