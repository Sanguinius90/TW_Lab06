import { Router, Request, Response } from 'express';
import Controller from '../interfaces/controller.interface';
import { v4 as uuidv4 } from 'uuid';

class ItemController implements Controller {
    public path = '/api/items';
    public router = Router();
    private items: { id: string, name: string }[] = [];

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(this.path, this.createItem);
        this.router.get(this.path, this.getAllItems);
        this.router.get(`${this.path}/:id`, this.getItemById);
        this.router.put(`${this.path}/:id`, this.updateItem);
        this.router.delete(`${this.path}/:id`, this.deleteItem);
    }

    private createItem = (req: Request, res: Response) => {
        const { name } = req.body;
        const newItem = { id: uuidv4(), name: name };
        this.items.push(newItem);
        console.log("Create item", newItem);
        res.status(201).json(newItem);
    };

    private getAllItems = (req: Request, res: Response) => {
        console.log("Get all item");
        res.status(200).json(this.items);
    };

    private getItemById = (req: Request, res: Response) => {
        const { id } = req.params;
        console.log("Get item id:", id);
        const item = this.items.find(item => item.id === id);
        if (item) {
            res.status(200).json(item);
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    };

    private updateItem = (req: Request, res: Response) => {
        const { id } = req.params;
        const { name } = req.body;
        console.log("Update item id:", id);
        const itemIndex = this.items.findIndex(item => item.id === id);
        if (itemIndex !== -1) {
            this.items[itemIndex].name = name;
            res.status(200).json(this.items[itemIndex]);
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    };

    private deleteItem = (req: Request, res: Response) => {
        const { id } = req.params;
        console.log("Delete item id:", id);
        const itemIndex = this.items.findIndex(item => item.id === id);
        if (itemIndex !== -1) {
            this.items.splice(itemIndex, 1);
            res.status(200).send();
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    };
}

export default ItemController;
