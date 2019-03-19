using SGL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace SGL.Controllers
{
    
    public class LivroController : ApiController
    {
        [HttpGet]
        public IEnumerable<Livro> ObterLivros()
        {
            var livroA = new Livro();
            livroA.LivroId = Guid.NewGuid();
            livroA.Nome = "livroA";
            livroA.Resumo = "sdakçlsdjalskdjal";

            var livroB = new Livro();
            livroB.LivroId = Guid.NewGuid();
            livroB.Nome = "livroB";
            livroB.Resumo = "sdakçlsdjalskdjal";

            var livroC = new Livro();
            livroC.LivroId = Guid.NewGuid();
            livroC.Nome = "livroC";
            livroC.Resumo = "sdakçlsdjalskdjal";

            var livroD = new Livro();
            livroD.LivroId = Guid.NewGuid();
            livroD.Nome = "livroD";
            livroD.Resumo = "sdakçlsdjalskdjal";

            var livros = new List<Livro>();

            livros.Add(livroA);
            livros.Add(livroB);
            livros.Add(livroC);
            livros.Add(livroD);

            return livros;
        }

        [HttpPost]
        public bool AddLivro(Livro livro)
        {
            return true;
        }
    }
}
