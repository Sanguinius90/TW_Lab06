import Controller from '../interfaces/controller.interface';
import { Request, Response, NextFunction, Router } from 'express';
import DataService from '../modules/services/data.service';
import { IData } from '../modules/models/data.model';


class DataController implements Controller {
   public path = '/api/data';
   public router = Router();
   private dataService = new DataService();


   constructor() {
       this.initializeRoutes();
   }


   private initializeRoutes() {
    this.router.get(`${this.path}/get`, this.getAll);
   }
   private getAll = (req: Request, res: Response) => {
    console.log("Get all item");
    res.status(200).json(this.router);
};
}


export default DataController;