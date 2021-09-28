using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/solicitacao")]
    public class SolicitacaoController : ControllerBase
    {
      private readonly DataContext _context;
      public SolicitacaoController(DataContext context)
      {
        _context = context;
      }

      //POST: api/solicitacao/create
      [HttpPost]
      [Route("create")]
      public IActionResult Create([FromBody] Solicitacao solicitacao)
      {
          _context.Solicitacoes.Add(solicitacao);
          _context.SaveChanges();
          return Created("", solicitacao);
      }

        //GET: api/solicitacao/list
      [HttpGet]
      [Route("list")]
      public IActionResult List() => Ok(_context.Solicitacoes.ToList());
      

      //GET: api/solicitacao/getbyid/1
      [HttpGet]
      [Route("getbyid/{id}")]

      public IActionResult GetById ([FromRoute] int id)
      {
        Solicitacao solicitacao = _context.Solicitacoes.Find(id);
        if (solicitacao == null)
        {
          return NotFound();
        }
        
        return Ok(solicitacao);
      }

      //DELETE: /api/solicitacao/delete/id
      [HttpDelete]
      [Route("delete/{id}")]
      public IActionResult Delete([FromRoute] int id)
      {
        // Expressão Lambda
        // Buscar um objeto na tabela de produtos com base no nome
        Solicitacao solicitacao = _context.Solicitacoes.Find(id);
        if(solicitacao == null)
        {
          return NotFound();
        }
        _context.Solicitacoes.Remove(solicitacao);
        _context.SaveChanges();
        return Ok(_context.Solicitacoes.ToList());
      }

      //PUT: api/solicitacao/update
      [HttpPut]
      [Route("update")]
      public IActionResult Update([FromBody] Solicitacao solicitacao)
      {
        _context.Solicitacoes.Update(solicitacao);
        _context.SaveChanges();
        return Ok(solicitacao);
      }
    }
}