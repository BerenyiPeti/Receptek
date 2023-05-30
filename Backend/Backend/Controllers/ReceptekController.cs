using Backend.Data;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Backend.Controllers
{
    [EnableCors]
    [Route("receptek")]
    [ApiController]
    public class ReceptekController : ControllerBase
    {
        private ReceptekContext _context;

        public ReceptekController(ReceptekContext context)
        {
            _context = context; 
        }

        [HttpGet("list")]

        public IActionResult getReceptek()
        {
            try
            {
                var list = (from kat in _context.Kategoriak join rec in _context.Receptek
                            on kat.id equals rec.kat_id                         
                            select new { rec.id, rec.nev, rec.kat_id, rec.kep_eleresi_ut, rec.leiras, katNev = kat.nev }).ToList();

                if (list.Count== 0)
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

        [HttpGet("listByKategoria/{katNev}")]

        public IActionResult getReceptekByKategoria(string katNev)
        {
            try
            {
                var list = (from kat in _context.Kategoriak
                            join rec in _context.Receptek
                            on kat.id equals rec.kat_id
                            where kat.nev == katNev  
                            select new { rec.id, rec.nev, rec.kat_id, rec.kep_eleresi_ut, rec.leiras, katNev = kat.nev }).ToList();

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

        [HttpPost("new")]
        public async Task<ActionResult<List<Receptek>>> newRecept(Receptek r)
        {
            try
            {
                _context.Receptek.Add(r);
                await _context.SaveChangesAsync();
                return Ok(await _context.Receptek.ToListAsync());
                //return Ok(sz);

            }
            catch (Exception e)
            {

                return BadRequest(e);
            }
        }

        [HttpDelete("delete/{id}")]

        public async Task<ActionResult<List<Receptek>>> deleteRecept(int id)
        {
            var recept = await _context.Receptek.FindAsync(id);
            if (recept == null)
                return BadRequest("Nincs ilyen recept");

            _context.Receptek.Remove(recept);
            await _context.SaveChangesAsync();

            return Ok(await _context.Receptek.ToListAsync());
        }
    }
}
