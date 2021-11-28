using System;
using System.Collections.Generic;

namespace API.Models
{
    public class Pedido
    {
        public Pedido() => CriadoEm = DateTime.Now;

        public int Id { get; set; }
        public string Destino { get; set; }
        public string DataPartida { get; set; } 
        public string DataRetorno { get; set; }
        public string Finalidade { get; set; }
        

        public DateTime CriadoEm { get; set; }

        public override string ToString() =>
        $"Destino: {Destino} | DataPartida: {DataPartida} | DataRetorno: {DataRetorno}| Finalidade: {Finalidade} | CriadoEm: {CriadoEm}  |";
    }
}