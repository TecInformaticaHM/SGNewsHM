using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SGL.Models
{
    public class Noticia
    {
        public long NoticiaId { get; set; }
        public DateTime DataInclusao { get; set; }
        public DateTime Dataalteracao { get; set; }
        public int TipoNoticia { get; set; }
        public string Titulo { get; set; }
        public string Subtitulo { get; set; }
        public string Resumo { get; set; }
        public string Descricao { get; set; }
        public DateTime Datainicioexibicao { get; set; }
        public bool Principal { get; set; }
    }
}