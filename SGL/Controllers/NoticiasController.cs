using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SGL.Controllers
{
    public class NoticiasController : Controller
    {
        // GET: Noticias
        public ActionResult Index()
        {
            ViewBag.menu = "home";
            return View();
        }
        public ActionResult AllNews()
        {
            ViewBag.menu = "allnews";
            return View();
        }

        //GET:Contatos
        public ActionResult Contatos()
        {
            ViewBag.menu = "contatos";
            return View();
        }


        // GET: Noticias
        public ActionResult Alunos()
        {
            ViewBag.menu = "alunos";
            return View();
        }

        public ActionResult DetalhesNoticia()
        {
            ViewBag.menu = "home";
            return View();
        }


    }
}