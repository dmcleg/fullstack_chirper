import { Query } from "../";
import type { TChirps, TUsers } from "../models";

const all = () =>
  Query<(TChirps | TUsers)[]>(
    `SELECT
            users.username,
            chirps
        FROM chirps
        JOIN users ON users.id = chirps.userid
        ORDER BY chirps.created_at DESC;`
  );
const one = (chirpid: number) =>
  Query<(TChirps | TUsers)[]>(
    `SELECT
        users.username,
        chirps
    FROM chirps
    JOIN users ON users.id = chirps.userid
    WHERE chirps.id = ?`
  );

  const insert = (chirp: any) => Query<{ insertId: number}>('INSERT INTO chirps SET ?', chirp);
  
  const update = (newContent: string, chirpid: number) => Query<{ affectedRows: number }>('UPDATE chirps SET ? WHERE id = ?', [newContent, chirpid])

  const destroy = (chirpid: number) => Query<{ affectedRows: number }>("DELETE FROM chirps WHERE id = ?", [chirpid])
 
export default {
  all,
  one,
  insert,
  update,
  destroy
};
