import { ApolloError } from "apollo-server-errors";
// import { sequelize } from "../db";
import Propiedad from "../db/model/Propiedad";

export class PropiedadController{
    async getPropiedades(){
        return await Propiedad.findAll()
    }

    async getPropiedad(id_propiedad: number){
        return await Propiedad.findOne({
            where: { id_propiedad }
        })
    }

    async savePropiedad(id_propiedad: number, nombre: string, direccion: string, fecha_inicio: Date, fecha_final: Date, 
        max_personas: number, id_usuario: number, hecho: number){
        return await Propiedad.create({id_propiedad, nombre, direccion, fecha_inicio, fecha_final, max_personas, id_usuario, hecho})
    }

    async updatePropiedad(id_propiedad: number, nombre: string, direccion: string, fecha_inicio: Date, fecha_final: Date, 
        max_personas: number, id_usuario: number, hecho:number){
        const propiedad = await Propiedad.findOne({
            where: { id_propiedad } // es una notación corta de where: { asin: asin }
        })
        // si existe procedemos a actualizar
        if (propiedad) {
            await Propiedad.update({ id_propiedad, nombre, direccion, fecha_inicio, fecha_final, max_personas, id_usuario,hecho }, {
                where: { id_propiedad } // es una notación corta de where: { asin: asin }
            })
            // regresamos el libro reciéntemente actualizado
            return await Propiedad.findOne({ where: { id_propiedad } })
        }
        // en caso contrario, lanzamos mensaje y código de error
        else {
            throw new ApolloError('Propiedad not found', 'ERR003')
        }
        
    }
}