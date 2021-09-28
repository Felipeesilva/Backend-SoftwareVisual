using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/funcionario")]
    public class AdministrativoController : ControllerBase
    {
      private readonly DataContext _context;
      public AdministrativoController(DataContext context)
      {
        _context = context;
      }

      //POST: api/administrativo/create
      [HttpPost]
      [Route("create")]
      public IActionResult Create([FromBody] Administrativo administrativo)
      {
          _context.Administrativos.Add(administrativo);
          _context.SaveChanges();
          return Created("", administrativo);
      }

        //GET: api/administrativo/list
      [HttpGet]
      [Route("list")]
      public IActionResult List() => Ok(_context.Administrativos.ToList());
      

      //GET: api/administrativo/getbyid/1
      [HttpGet]
      [Route("getbyid/{id}")]

      public IActionResult GetById ([FromRoute] int id)
      {
        Administrativo administrativo = _context.Administrativos.Find(id);
        if (administrativo == null)
        {
          return NotFound();
        }
        
        return Ok(administrativo);
      }

      //DELETE: /api/administrativo/delete/nome
      [HttpDelete]
      [Route("delete/{name}")]
      public IActionResult Delete([FromRoute] string name)
      {
        // Expressão Lambda
        // Buscar um objeto na tabela de produtos com base no nome
        Administrativo administrativo = _context.Administrativos.FirstOrDefault(funcionario => administrativo.Nome == name);
        if(administrativo == null)
        {
          return NotFound();
        }
        _context.Administrativos.Remove(administrativo);
        _context.SaveChanges();
        return Ok(_context.Administrativos.ToList());
      }

      //PUT: api/administrativo/update
      [HttpPut]
      [Route("update")]
      public IActionResult Update([FromBody] Administrativo administrativo)
      {
        _context.Administrativos.Update(administrativo);
        _context.SaveChanges();
        return Ok(administrativo);
      }
    }
}