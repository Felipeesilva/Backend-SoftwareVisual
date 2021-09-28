using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/funcionario")]
    public class FuncionarioController : ControllerBase
    {
      private readonly DataContext _context;
      public FuncionarioController(DataContext context)
      {
        _context = context;
      }

      //POST: api/funcionario/create
      [HttpPost]
      [Route("create")]
      public IActionResult Create([FromBody] Funcionario funcionario)
      {
          _context.Funcionarios.Add(funcionario);
          _context.SaveChanges();
          return Created("", funcionario);
      }

        //GET: api/funcionario/list
      [HttpGet]
      [Route("list")]
      public IActionResult List() => Ok(_context.Funcionarios.ToList());
      

      //GET: api/funcionario/getbyid/1
      [HttpGet]
      [Route("getbyid/{id}")]

      public IActionResult GetById ([FromRoute] int id)
      {
        Funcionario funcionario = _context.Funcionarios.Find(id);
        if (funcionario == null)
        {
          return NotFound();
        }
        
        return Ok(funcionario);
      }

      //DELETE: /api/funcionario/delete/nome
      [HttpDelete]
      [Route("delete/{name}")]
      public IActionResult Delete([FromRoute] string name)
      {
        // Expressão Lambda
        // Buscar um objeto na tabela de produtos com base no nome
        Funcionario funcionario = _context.Funcionarios.FirstOrDefault(funcionario => funcionario.Nome == name);
        if(funcionario == null)
        {
          return NotFound();
        }
        _context.Funcionarios.Remove(funcionario);
        _context.SaveChanges();
        return Ok(_context.Funcionarios.ToList());
      }

      //PUT: api/funcionario/update
      [HttpPut]
      [Route("update")]
      public IActionResult Update([FromBody] Funcionario funcionario)
      {
        _context.Funcionarios.Update(funcionario);
        _context.SaveChanges();
        return Ok(funcionario);
      }
    }
}