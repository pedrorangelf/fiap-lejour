﻿using CartorioCasamento.Domain.Interfaces.Repositories;
using CartorioCasamento.Domain.Models;
using CartorioCasamento.Infra.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace CartorioCasamento.Infra.Repositories
{
    public class RepositoryBase<TEntity> : IRepositoryBase<TEntity> where TEntity : EntityBase, new()
    {
        protected readonly ContextBase _contextBase;
        private readonly DbSet<TEntity> _dbSet;

        public RepositoryBase(ContextBase contextBase)
        {
            _contextBase = contextBase;
            _dbSet = contextBase.Set<TEntity>();
        }

        #region Consults

        public virtual async Task<TEntity> GetById(int id)
        {
            return await _dbSet.FindAsync(id);
        }

        public virtual async Task<TEntity> FindAsNoTracking(int id)
        {
            var entity = await _dbSet.FindAsync(id);

            if(entity != null) _contextBase.Entry(entity).State = EntityState.Detached;

            return entity;
        }

        public virtual async Task<List<TEntity>> GetAll()
        {
            return await _dbSet.ToListAsync();
        }

        public async Task<IEnumerable<TEntity>> Find(Expression<Func<TEntity, bool>> predicate)
        {
            return await _dbSet.AsNoTracking().Where(predicate).ToListAsync();
        }

        #endregion

        #region Inputs

        public virtual async Task Add(TEntity entity)
        {
            _dbSet.Add(entity);
            await SaveChanges();
        }

        public virtual async Task Update(TEntity entity)
        {
            _dbSet.Update(entity);
            await SaveChanges();
        }

        public virtual async Task Remove(int id)
        {
            _dbSet.Remove(new TEntity { Id = id });
            await SaveChanges();
        }

        public async Task RemoveInScale(List<TEntity> entities)
        {
            if (entities.Count() == 0) return;

            entities.ForEach(e =>
            {
                _dbSet.Remove(new TEntity { Id = e.Id });
            });
            await SaveChanges();
        }

        #endregion

        public async Task<int> SaveChanges()
        {
            return await _contextBase.SaveChangesAsync();
        }

        public void Dispose()
        {
            _contextBase?.Dispose();
        }
    }
}
