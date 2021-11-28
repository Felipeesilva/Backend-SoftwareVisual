import { ItemDespesa } from './itemDespesa';

export interface Despesa
{
  id?: number;
  lugar: string;
  ItemDespesa?: ItemDespesa;
  itensId: number;
  carrinhoId: string;
  criadoem?: string;
}