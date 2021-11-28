export interface Pedido
{
  id?: number;
  destino: string;
  dataPartida: string;
  dataRetorno: string;
  finalidade: string;
  criadoem?: string;
}