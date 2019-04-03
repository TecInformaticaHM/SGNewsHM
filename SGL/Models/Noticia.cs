using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace SGL.Models
{
    [Table("Noticias")]
    public class Noticia
    {
        [Key]
        public int NoticiaId { get; set; }
        [ForeignKey("TipoNoticia")]
        public int TipoNoticiaId { get; set; }
        public DateTime DataInclusao { get; set; }
        public DateTime Dataalteracao { get; set; }
        public string Titulo { get; set; }
        public string Subtitulo { get; set; }
        public string Resumo { get; set; }
        public string Descricao { get; set; }
        public DateTime Datainicioexibicao { get; set; }
        public bool Principal { get; set; }

        public virtual TipoNoticia TipoNoticia { get; set; }
    }
}