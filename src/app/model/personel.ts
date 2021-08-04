import { Gorev } from "./gorev";
import { kullanici } from "./kullanici";

export interface Personel extends kullanici{
    gorevs : Gorev[];
    takimId : number;
}