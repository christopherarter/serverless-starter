import { Model } from 'objection';
import knex from '../database/db';

Model.knex(knex);

export default Model;