const express = require('express');
const router = express.Router();
const jwt = require('../lib/jwt');

const user = require('../usecases/user')

router.post('/register', async (req, res) => {
    try {
        const { name, lastname, email, password, address, role } = req.body;
        await user.create({ name, lastname, email, password, address, role });
        res.json({
            success: true,
            message: `User ${email} created successfully`
        });
    } catch (error) {
        res.status(404)
        res.json({
            success: false,
            message: `Could not create user ${req.body.email}`,
            error: [error]
        });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const payload = await user.login(email, password)
        res.json({
            success: true,
            message: 'logged in successfully',
            payload
        });
    } catch (error) {
        res.status(401)
        res.json({
            success: false,
            message: 'Cannot login',
            errors: [error]
        });
    }
});


module.exports = router;