using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/viagem")]
    public class ViagemController : ControllerBase
    {
      private readonly DataContext _context;
      public ViagemController(DataContext context)
      {
        _context = context;
      }

      //POST: api/viagem/create
      [HttpPost]
      [Route("create")]
      public IActionResult Create([FromBody] Viagem viagem)
      {
          _context.Viagens.Add(viagem);
          _context.SaveChanges();
          return Created("", viagem);
      }

        //GET: api/viagem/list
      [HttpGet]
      [Route("list")]
      public IActionResult List() => Ok(_context.Viagens.ToList());
      

      //GET: api/viagem/getbyid/1
      [HttpGet]
      [Route("getbyid/{id}")]

      public IActionResult GetById ([FromRoute] int id)
      {
        Viagem viagem = _context.Viagens.Find(id);
        if (viagem == null)
        {
          return NotFound();
        }
        
        return Ok(viagem);
      }

      //DELETE: /api/viagem/delete/nome
      [HttpDelete]
      [Route("delete/{name}")]
      public IActionResult Delete([FromRoute] string name)
      {
        // Expressão Lambda
        // Buscar um objeto na tabela de produtos com base no nome
        Viagem viagem = _context.Viagens.FirstOrDefault(viagem => viagem.Nome == name);
        if(viagem == null)
        {
          return NotFound();
        }
        _context.Viagens.Remove(viagem);
        _context.SaveChanges();
        return Ok(_context.Viagens.ToList());
      }

      //PUT: api/viagem/update
      [HttpPut]
      [Route("update")]
      public IActionResult Update([FromBody] Viagem viagem)
      {
        _context.Viagens.Update(viagem);
        _context.SaveChanges();
        return Ok(viagem);
      }
    }
}