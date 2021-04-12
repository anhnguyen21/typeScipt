import { knex } from 'knex';
import { KnexConfig } from '../../knexfile';
import { Model } from 'objection';

export function setupDb() {
  const db = knex(KnexConfig.development);
  Model.knex(db);
}