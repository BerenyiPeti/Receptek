using Backend.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [Route("kategoriak")]
    [ApiController]
    public class KategoriakController : ControllerBase
    {
        private ReceptekContext _context;

        public KategoriakController(ReceptekContext context)
        {
            _context = context;
        }

        [HttpGet("list")]

        public IActionResult getReceptek()
        {
            try
            {
                var list = _context.Kategoriak.ToList();

                if (list.Count == 0)
                {
                    return NotFound("Nincs ilyen tábla");
                }
                return Ok(list);
            }
            catch (Exception e)
            {
                return StatusCode(404, e);
            }
        }
    }
}
