import { Pedido } from './pedido';
import { Despesa } from './despesa';


export interface Solicitacao {
    id: number;
    funcionario: String;
    Pedido?: Pedido;
    pedidoId: string;
    Despesas?: Despesa;
    criadoem?: string;
}
