using Microsoft.AspNetCore.Mvc;

namespace TravelCostManagerApp.Controllers
{
    public class TripController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult CreateTeam()
        {
            return View();
        }
    }
}
