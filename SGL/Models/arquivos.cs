﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SGL.Models
{
    public class Arquivos
    {
        public long ArquivoId { get; set; }
        public string Nome { get; set; }
        public string Formato { get; set; }
        public string Minetype { get; set; }
        public string URL { get; set; }
        public string Hash { get; set; }
        public bool ImagemCapa { get; set; }
    }
}