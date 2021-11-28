using System;
using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/pedido")]
    public class PedidoController : ControllerBase
    {
        private readonly DataContext _context;

        public PedidoController(DataContext context)
        {
            _context = context;
        }

        //POST: api/pedido/create
        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody] Pedido pedido)
        {
            _context.Pedidos.Add(pedido);
            _context.SaveChanges();
            return Created("", pedido);
        }

        //GET: api/pedido/list
        [HttpGet]
        [Route("list")]
        public IActionResult List() => 
            Ok(_context.Pedidos
            .ToList());

        //GET: api/pedido/getbyid/{id}
        [HttpGet]
        [Route("getbyid/{id}")]
        public IActionResult GetById ([FromRoute] int id)
        {
            Pedido pedido = _context.Pedidos.Find(id);
            if (pedido == null)
            {
                return NotFound();
            }
            return Ok(pedido);
        }

        //DELETE: /api/pedido/delete/id
        [HttpDelete]
        [Route("delete/{id}")]
        public IActionResult Delete([FromRoute] int id)
        {
            // Expressão Lambda
            // Buscar um objeto na tabela de pedido com base no id
            Pedido pedido = _context.Pedidos.Find(id);
            if(pedido == null)
            {
                return NotFound();
            }
            _context.Pedidos.Remove(pedido);
            _context.SaveChanges();
            return Ok(_context.Pedidos.ToList());
        }

        //PUT: api/pedido/update
        [HttpPut]
        [Route("update")]
        public IActionResult Update([FromBody] Pedido pedido)
        {
            _context.Pedidos.Update(pedido);
            _context.SaveChanges();
            return Ok(pedido);
        }
    }
}

// Se precisar DELETE utilizando o NOME

// //DELETE: /api/funcionario/delete/nome
//       [HttpDelete]
//       [Route("delete/{name}")]
//       public IActionResult Delete([FromRoute] string name)
//       {
//         // Expressão Lambda
//         // Buscar um objeto na tabela de produtos com base no nome
//         Funcionario funcionario = _context.Funcionarios.FirstOrDefault(funcionario => funcionario.Nome == name);
//         if(funcionario == null)
//         {
//           return NotFound();
//         }
//         _context.Funcionarios.Remove(funcionario);
//         _context.SaveChanges();
//         return Ok(_context.Funcionarios.ToList());
//       }