// ctor = Construtor

using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        // Construtor da Classe
        public DataContext(DbContextOptions<DataContext> options) : base(options)   { }
    
        //Lista de propriedades que vão virar tabela no banco
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Pedido> Pedidos { get; set; }
        public DbSet<ItemDespesa> ItensDespesa { get; set; }
        public DbSet<Despesa> Despesas { get; set; }

        

        
    }

}