import express from 'express';

const router = express.Router();

router.get('/getUser', (req, res) => {
    res.send("Hello1")
});

router.post('/createUser', (req, res) => {
    res.send("Hello2")
});

router.put('/updateUser', (req, res) => {
    res.send("Hello3")
});

router.delete('/deleteUser', (req, res) => {
    res.send("Hello4")
});

export default router;
