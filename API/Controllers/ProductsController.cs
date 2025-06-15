using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using API.Entities;
using API.Data;

namespace API.Controllers;
[Route("api/[controller]")]
[ApiController]
public class ProductsController : ControllerBase
{

    private readonly StoreContext _context;
    public ProductsController ( StoreContext context )
    {
        _context = context;
    }

    [HttpGet]
    public ActionResult<List<Product>> GetProducts()
    {
        return _context.Products.ToList();
    }

    [HttpGet("{id}")]
    public ActionResult<Product> GetProduct( int id )
    {
        var product = _context.Products.Find(id);

        if ( product == null ) 
            return NotFound();

        return product;
    }

}
