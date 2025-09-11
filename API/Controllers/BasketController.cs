using System;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class BasketController(StoreContext context) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<Basket>> GetBasket()
    {
        var basket = await context.Baskets
        .Include(x => x.Items)
        .ThenInclude(x => x.Product)
        .FirstOrDefaultAsync(x => x.BasketId == Request.Cookies["basketId"]);

        if (basket == null) return NoContent();

        return basket;
    }


    [HttpPost]
    public async Task<ActionResult> AddItemToBasket(int productId, int quantity)
    {
        return StatusCode(201);
    }

    [HttpDelete]
    public async Task<ActionResult> RemoveBasketItem(int productId, int quantity)
    {
        return Ok();

    }

}
