using CartorioCasamento.Domain.Models;
using System.Threading.Tasks;

namespace CartorioCasamento.Domain.Interfaces.Services
{
    public interface IEstadoService : IServiceBase<Estado>
    {
       Task<decimal> BuscaValorCasamento(int id);
       Task<Estado> BuscaEstadoPorSigla(string sigla);
    }
}
