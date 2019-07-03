import express from 'express';

const postsRouter = express.Router();

/**
 * Index
 */
postsRouter.get('/', (req, res) => {
    return res.send('get all posts')
});

/**
 * Get individual post
 */
postsRouter.get('/:id', (req, res) => {
    return res.send(req.params.id)
});

/**
 * Create
 */
postsRouter.post('/', (req, res) => {
    return res.send(req.body);
});

/**
 * Update
 */
postsRouter.put('/', (req, res) => {
    return res.send(req.body);
});

/**
 * Delete
 */
postsRouter.delete('/', (req, res) => {
    return res.send("delete!");
});

export default postsRouter;