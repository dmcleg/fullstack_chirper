import e, * as express from 'express';
import db from '../db';

const router = express.Router();

router.get('/:id?', async (req, res, next) => {

    const userid = Number(req.params.id);

    if (userid) {
        try {
            const [user] = await db.users.one(userid);
            res.json(user);
        } catch (error) {
            console.log(error);
            res.json(error);
        }
    } else {
        try {
            const users = await db.users.all();
            res.json(users);
        } catch (error) {
            console.log(error);
            res.json(error);
        }
    }

});

export default router;