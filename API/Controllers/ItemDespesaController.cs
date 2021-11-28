using System;
using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/itemDespesa")]
    public class ItemDespesaController : ControllerBase
    {
        private readonly DataContext _context;

        public ItemDespesaController(DataContext context)
        {
            _context = context;
        }

        //POST: api/itemDespesa/create
        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody] ItemDespesa item)
        {
            _context.ItensDespesa.Add(item);
            _context.SaveChanges();
            return Created("", item);
        }

        //GET: api/itemDespesa/list
        [HttpGet]
        [Route("list")]
        public IActionResult List() => 
            Ok(_context.ItensDespesa
            .ToList());

        //GET: api/itemDespesa/getbyid/1
        [HttpGet]
        [Route("getbyid/{id}")]
        public IActionResult GetById([FromRoute] int id)
        {
            ItemDespesa item = _context.ItensDespesa.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return Ok(item);
        }

        //DELETE: /api/itemDespesa/delete/bolacha
        [HttpDelete]
        [Route("delete/{name}")]
        public IActionResult Delete([FromRoute] string name)
        {
            //Expressão lambda
            //Buscar um objeto na tabela de ItemDespesa com base no nome (Produto)
            ItemDespesa item = _context.ItensDespesa.FirstOrDefault(item => item.Produto == name);

            if (item == null)
            {
                return NotFound();
            }
            _context.ItensDespesa.Remove(item);
            _context.SaveChanges();
            return Ok(_context.ItensDespesa.ToList());
        }


        //PUT: api/itemDespesa/update
        [HttpPut]
        [Route("update")]
        public IActionResult Update([FromBody] ItemDespesa item)
        {
            _context.ItensDespesa.Update(item);
            _context.SaveChanges();
            return Ok(item);
        }
        

       
    }
}