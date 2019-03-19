using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace SGL.Models
{
    public class NewsHMContext : DbContext
    {
        public NewsHMContext() : base("MySqlNewsHM")
        {

        }

        public DbSet<Noticia> Noticias { get; set; }
        public DbSet<TipoNoticia> TipoNoticia { get; set; }
        public DbSet<Arquivos> Arquivos { get; set; }
    }
}