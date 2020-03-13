using BusinessObjects.Respositories;
using Microsoft.Extensions.Configuration;
using System;
using System.Data;
using System.Data.SqlClient;

namespace SQLServerDAL
{
    public class ApplicationRepository : IApplicationRepository
    {
        private readonly string cs;
        public ApplicationRepository(IConfiguration config)
        {
            cs = config.GetSection("DatabaseConnectionString").Value; // TODO IOptions or custom interface
        }

        public string Get()
        {
            using (var conn = new SqlConnection(cs))
            {
                conn.Open();
                using (var comm = new SqlCommand("select top 1 value from test;", conn))
                {
                    comm.CommandType = CommandType.Text;

                    using (var dr = comm.ExecuteReader())
                    {
                        dr.Read();
                        return dr.GetString(0);
                    }
                }
            }
        }
    }
}
