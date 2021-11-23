import { Funcionario } from "./funcionario";

export interface Solicitacao {
    id: number;
    destino: string;
    dataPartida: string;
    dataRetorno: string;
    finalidade: string;
    funcionarioid: number;
    funcionario?: Funcionario;
    criadoem?: string;
}
