import serverless from 'serverless-http';
import app from './app/main';
module.exports.handler = serverless(app);