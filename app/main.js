import express from 'express';
const app = express();
import router from './router';
import cors from 'cors';
app.use(cors);
app.use(router);
export default app;
