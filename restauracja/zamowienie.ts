import {pracownik} from "./pracownik";
import {stolik} from "./stolik";
import {danie} from "./danie";

export class zamowienie{
    pracownik: number;
    pozycje: string;
    status: string;
    stolik: number;
    kwota: number;
}