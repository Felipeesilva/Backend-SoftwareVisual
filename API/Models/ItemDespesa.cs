using System;

namespace API.Models
{
    public class ItemDespesa
    {
        public ItemDespesa() => CriadoEm = DateTime.Now;
        public int Id { get; set; }
        public String Produto { get; set; }
        public int Quantidade { get; set; }
        public double Preco { get; set; }
        public DateTime CriadoEm { get; set; }
    }
}