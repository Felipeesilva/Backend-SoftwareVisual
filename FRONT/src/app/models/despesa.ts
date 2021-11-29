import { ItemDespesa } from './itemDespesa';

export interface Despesa
{
  id?: number;
  lugar: string;
  itemDespesa?: ItemDespesa;
  itensId: number;
  carrinhoId: string;
  criadoem?: string;
}