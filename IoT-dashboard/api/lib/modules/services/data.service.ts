import { Types } from 'mongoose'
import { Request, Response } from 'express';
import DataModel from '../schemas/data.schema';

export default class DataService {

   public async getAll() {
       try {
           const data = await DataModel.find();
           return data;
       } catch (error) {
           throw new Error(`Query failed: ${error}`);
       }
   }
   public async create(req: Request, res: Response) {
        try{
            const{
                temperature,
                pressure,
                humidity,
                deviceId,
            } = req.body;
            let data = await DataModel.insertOne({
                temperature: temperature,
                pressure: pressure,
                humidity: humidity,
                deviceId: deviceId
            })
            res.status(200).json(data);
        }catch(error){
            throw new Error(`Querry failed: ${error}`)
        }
   }

   public async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const objectId = new Types.ObjectId(id);
            await DataModel.deleteOne({ "_id": objectId })
            res.sendStatus(200);
        }catch (error) {
            throw new Error(`Query failed: ${error}`);
        }
    }
}