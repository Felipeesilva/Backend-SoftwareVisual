// PROP - cria a propriedade

using System;
using funcionario = List<Funcionario>;

namespace API.Models
{
    public class Solicitacao

    {
        public Solicitacao() => CriadoEm = DateTime.Now;
        public int Id { get; set; }
        public string Destino { get; set; }
        public string DataPartida { get; set; }
        public string DataRetorno { get; set; }
        public string Finalidade { get; set; }
        public DateTime CriadoEm { get; set; }
        public List<Funcionario> Funcionarios {get; set;} = new List<Funcionario>(); 

        public override string ToString() =>
            $"Destino: {Destino} | DataPartida: {DataPartida} | DataRetorno: {DataRetorno}| Finalidade: {Finalidade} | CriadoEm: {CriadoEm} | ";
        
    }
}