﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace SGL.Models
{
    [Table("TipoNoticia")]
    public class TipoNoticia
    {
        [Key]
        public long TipoNoticiaId { get; set; }
        public string Descricao { get; set; }
    }
}