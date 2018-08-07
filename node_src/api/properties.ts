import { Request, Response } from 'express';
import { Position } from '../model/Position';
import { Property } from '../model/Property';

export let all = (req: Request, res:Response) => {
    const p1 = new Property(3003, 'Barn Plaza', new Position(12.0123, -42.98612));
    const p2 = new Property(1001, 'Roosevelt Mall', new Position(70.00, -9.1323));
    const properties = [p1, p2];

    res.json(properties)
}

export let one = (req: Request, res: Response) => {
    let {id} = req.params;
    const property = new Property(id, 'XYZ Property');
    res.json(property)
}