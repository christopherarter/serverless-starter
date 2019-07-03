import express from 'express';
const app = express();
import router from './router';
app.use(router);
export default app;
