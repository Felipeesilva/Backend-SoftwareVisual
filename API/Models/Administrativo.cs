// PROP - cria a propriedade

using System;

namespace API.Models
{
    public class Administrativo
    {
        public Administrativo() => CriadoEm = DateTime.Now;
        public int Id { get; set; }
        public string Responsavel { get; set; }
        public string MatriculaAdm { get; set; }
        public DateTime CriadoEm { get; set; }

        public override string ToString() =>
            $"Nome: {Responsavel} | Matricula: {MatriculaAdm} | Criado Em: {CriadoEm} ";
        
    }
}