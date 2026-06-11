using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using wd.Models;

namespace wd.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View("rps");
        }
        public IActionResult recipe_template() { return View("recipe_template"); } 
        public IActionResult testing_page() { return View("testing_page"); }
        public IActionResult rps() { return View("rps"); }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
