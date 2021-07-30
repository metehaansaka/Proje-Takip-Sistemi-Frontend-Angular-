import { Gorev } from "./gorev";
import { kullanici } from "./kullanici";

export interface personel extends kullanici{
    gorevs : Gorev[];
    takimId : number;
}