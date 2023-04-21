using Microsoft.EntityFrameworkCore;
using QuickBiteBE.Models;
using QuickBiteBE.Services.Interfaces;

namespace QuickBiteBE.Services;

public class UserService : IUserService
{
    private readonly QuickBiteContext _context;

    public UserService(QuickBiteContext context)
    {
        _context = context;
    }

    public async Task<User> GetUserById(int id)
    {
        var userFromDb = await _context.Users
            .Include(user => user.Cart)
            .Include(user => user.Cart.CartDishes)
            .Include(user => user.Orders)
            .FirstOrDefaultAsync(user => user.Id == id);

        if (userFromDb == null)
            throw new ArgumentException("User not found.");

        return userFromDb;
    }
}