using SGL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SGL.Controllers
{
    public class ValuesController : ApiController
    {
        private readonly NewsHMContext _context = new NewsHMContext();
        // GET api/values
        public IEnumerable<Noticia> Get()
        {
           return _context.Noticias.ToList();
            //return new string[] { "value1", "value2", "pacó" };
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
