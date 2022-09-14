import express from 'express';
import {Request, Response} from 'express';
import zamowienieModels from '../models/zamowienieModel';
const router = express.Router();
const app = express();

app.use(express.json());

router.post('/',async (req:Request, res:Response) =>{
    const zamowienie = new zamowienieModels({
        pracownik:req.body.pracownik,
        danie:req.body.danie,
        status:req.body.status,
        stolik:req.body.stolik,
        cena:req.body.cena
    })
    const saveZamowienie = await zamowienie.save();
    res.status(201).json(zamowienie);
})

router.get('/',async (req:Request, res:Response) => {
    const zamowienie = await zamowienieModels.find();
    res.status(201).send(zamowienie);
})

router.put('/:id',async (req:Request, res:Response) => {
    const zamowienie = await zamowienieModels.findByIdAndUpdate(req.params.id, {$set:req.body},{
        new:true
    })
    res.status(201).json(zamowienie);
})

router.delete('/:id',async (req:Request, res:Response) => {
    const zamowienie = await zamowienieModels.findByIdAndDelete(req.params.id)
    res.status(201).json(zamowienie);
})

module.exports = router;