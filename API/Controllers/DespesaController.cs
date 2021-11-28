using System;
using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/despesa")]
    public class DespesaController : ControllerBase 
    {
        private readonly DataContext _context;
        public DespesaController(DataContext context)
        {
            _context = context;
        }

        //POST: api/despesa/create
        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody] Despesa despesa)
        {
            if (String.IsNullOrEmpty(despesa.CarrinhoId))
            {
                despesa.CarrinhoId = Guid.NewGuid().ToString();
            }
            despesa.Itens = _context.ItensDespesa.Find(despesa.ItensId);
            _context.Despesas.Add(despesa);
            _context.SaveChanges();
            return Created("", despesa);
        }

        // GET: api/despesa/getbycartid/XXXXX-XXXX-XXXXXXXXXXX
        [HttpGet]
        [Route("getbycartid/{cartid}")]
        public IActionResult GetByCartId([FromRoute] string cartId)
        {
            return Ok(_context.Despesas
                .Include(despesa => despesa.Itens)
                .Where(despesa => despesa.CarrinhoId == cartId).ToList());
        }

        //GET: api/despesa/list
        [HttpGet]
        [Route("list")]
        public IActionResult List() => 
            Ok(_context.Despesas
            .ToList());
    }
}