using BusinessObjects.Respositories;
using BusinessObjects.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace 
ErrorApp.Services
{
    public class ApplicationService : IApplicationService
    {
        private readonly IApplicationRepository repository;
        public ApplicationService(IApplicationRepository repository)
        {
            this.repository = repository;
        }

        public string Get()
        {
            return repository.Get();
        }
    }
}
