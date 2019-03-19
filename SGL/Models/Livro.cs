using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SGL.Models
{
    public class Livro
    {
        public Guid LivroId { get; set; }
        public string Nome { get; set; }
        public string Resumo { get; set; }
    }
}