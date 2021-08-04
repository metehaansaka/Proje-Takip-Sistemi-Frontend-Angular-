import { Proje } from './proje';
import { Personel } from './personel';
export interface Takim {
    id: number;
    takim: string;
    aciklama: string;
    personels : Personel[];
    projes : Proje[];
}