using SGL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SGL.Controllers
{
    public class NoticiasApiController : ApiController
    {
        
        private readonly NewsHMContext _context = new NewsHMContext();
        // GET api/values
        [HttpGet]
        public IEnumerable<object> ObterNoticias()
        {
            try
            {
                //var noticias = _context.Noticias.ToList();
                var noticias = (from n in _context.Noticias
                                select new
                                {
                                    n.NoticiaId,
                                    n.Titulo,
                                    n.TipoNoticia.Descricao
                                }).ToList();

                return noticias;
            }
            catch (Exception ex)
            {

                throw ex;
            }
           
            //return new string[] { "value1", "value2", "pacó" };
        }

        [HttpGet]
        public object ObterNoticiaPrincipal()
        {
            try
            {
                //var noticias = _context.Noticias.ToList();
                var noticia = (from n in _context.Noticias
                                where n.Principal == true
                                select new
                                {
                                    n.NoticiaId,
                                    n.TipoNoticiaId,
                                    n.Titulo,
                                    n.Subtitulo,
                                    n.Resumo,
                                    n.Descricao,
                                    n.Datainicioexibicao,
                                    TipoNoticia = n.TipoNoticia.Descricao
                                }).SingleOrDefault();

                return noticia;
            }
            catch (Exception ex)
            {

                throw ex;
            }

            //return new string[] { "value1", "value2", "pacó" };
        }
    }
}
