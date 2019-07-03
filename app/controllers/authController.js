import express from 'express';

const authController = express.Router();

/**
 * Login
 */
authController.post('/login', (req, res) => {
    return res.send('check credentials here')
});

/**
 * Reset Password
 */
authController.post('/reset-password', (req, res) => {
    return res.send('reset-password')
});

export default authController;