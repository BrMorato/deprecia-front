
import {Crfb} from '../modelo/crfb.model'
export class Bem{
    id:number;
    codigo:string;
    nome:string;
    classificacao: Crfb;
    descricao:string;
    turnos: number;
    estado_aquisicao:boolean;
    valor_aquisicao:number;
    valor_venda:number;
    status:boolean;
    dt_aquisicao: Date;
    dt_venda: Date;
    tempo_uso: number;
    

} 