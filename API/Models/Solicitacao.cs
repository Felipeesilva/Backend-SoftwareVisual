// PROP - cria a propriedade

using System;

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
        // Relacionando com funcionario
        public Funcionario Funcionario { get; set; }
        public int FuncionarioId { get; set; }


        public override string ToString() =>
            $"Destino: {Destino} | DataPartida: {DataPartida} | DataRetorno: {DataRetorno}| Finalidade: {Finalidade} | CriadoEm: {CriadoEm} | FuncionarioId: {FuncionarioId} |";
        
    }
}