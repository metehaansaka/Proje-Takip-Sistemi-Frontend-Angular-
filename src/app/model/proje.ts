import { Gorev } from "./gorev";
import { SonucRaporu } from "./sonucRaporu";

export interface Proje{
    id : number;
    proje : string;
    aciklama : string;
    projeDurum : number;
    takimId : number;
    gorevs : Gorev[];
    sonucRaporus : SonucRaporu[];
}