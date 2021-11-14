import * as express from 'express';
import db from '../db';

const router = express.Router();

router.get('/:id?', async (req, res, next) => {

    const chirpid = Number(req.params.id);

    if (chirpid) {
        try {
            const [chirp] = await db.chirps.one(chirpid);
            res.json(chirp);
        } catch (error) {
            console.log(error);
            res.json(error);
        }
    } else {
        try {
            const chirps = await db.chirps.all();
            res.json(chirps);
        } catch (error) {
            console.log(error);
            res.json(error);
        }
    }
});

router.post('/:id?', async (req, res) => {

    const chirp = req.body;

    try {
        const { insertId: chirpid } = await db.chirps.insert(chirp);
        res.json({ chirpid, msg: console.log("chirp inserted")})
    } catch (error) {
        console.log(error);
        res.json(error);
    }
})

router.put('/:id?', async (req, res) => {

    const chirpid = Number(req.params.id);
    const chirp = req.body;

    try {
        const { affectedRows: updatedid } = await db.chirps.update(chirp, chirpid);
        res.json({ chirpid, msg: "chirp updated"})
    } catch (error) {
        console.log(error);
        res.json(error);
    }
})

router.delete('/:id?', async (req, res) => {

    const chirpid = Number(req.params.id);

    try {
        const { affectedRows: updatedid } = await db.chirps.destroy(chirp, chirpid);
        res.json({ chirpid, msg: "chirp deleted"})
    } catch (error) {
        console.log(error);
        res.json(error);
    }
})

export default router;