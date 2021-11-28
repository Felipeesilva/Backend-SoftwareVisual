using System;
using System.Collections.Generic;

namespace API.Models
{
    public class Despesa
    {
        public Despesa() => CriadoEm = DateTime.Now;
        public int Id { get; set; }
        public String Lugar { get; set; }
        public ItemDespesa Itens { get; set; }
        public int ItensId { get; set; }
        public string CarrinhoId { get; set; }
        public DateTime CriadoEm { get; set; }
    }
}