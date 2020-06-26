using CartorioCasamento.Domain.Models;
using System.Threading.Tasks;

namespace CartorioCasamento.Domain.Interfaces.Repositories
{
    public interface IEstadoRepository : IRepositoryBase<Estado>
    {
         Task<decimal> BuscaValorCasamento(int id);
         Task<Estado> BuscaEstadoPorSigla(string sigla);
    }
}
