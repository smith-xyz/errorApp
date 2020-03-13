using BusinessObjects.Services;
using Microsoft.AspNetCore.Mvc;
using SQLServerDAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace 
ErrorApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ApplicationController : ControllerBase
    {
        private readonly IApplicationService service;
        public ApplicationController(IApplicationService service)
        {
            this.service = service;
        }

        [HttpGet]
        public ActionResult<string> Get()
        {
            try
            {
                return Ok(service.Get());
            }
            catch(Exception e)
            {
                return Ok(e.Message);
            }
            
        }
    }
}
