// PROP - cria a propriedade
using System;
using System.Collections.Generic;

namespace API.Models
{
    public class Solicitacao

    {
        public Solicitacao() => CriadoEm = DateTime.Now;

        public int Id { get; set; }
        public string Funcionario { get; set; }
        public Pedido Pedido { get; set; }
        public int PedidoId { get; set; }
        public List<Despesa>  Despesas  { get; set; }
        public DateTime CriadoEm { get; set; }

        
        
    }
}