import express from 'express';
import {Request, Response} from 'express';
import rezerwacjaModels from '../models/rezerwacjaModel';
const router = express.Router();
const app = express();

app.use(express.json());

router.post('/',async (req:Request, res:Response) =>{
    const rezerwacja = new rezerwacjaModels({
        stolik:req.body.stolik,
        start:req.body.start,
        end:req.body.end,
        client:req.body.client,
    })
    const saveRezerwacja= await rezerwacja.save();
    res.status(201).json(rezerwacja);
})

router.get('/',async (req:Request, res:Response) => {
    const rezerwacja = await rezerwacjaModels.find();
    res.status(201).json(rezerwacja);
})

router.put('/:id',async (req:Request, res:Response) => {
    const rezerwacja = await rezerwacjaModels.findByIdAndUpdate(req.params.id, {$set:req.body},{
        new:true
    })
    res.status(201).json(rezerwacja);
})

router.delete('/:id',async (req:Request, res:Response) => {
    const rezerwacja = await rezerwacjaModels.findByIdAndDelete(req.params.id)
    res.status(201).json(rezerwacja);
})

module.exports = router;