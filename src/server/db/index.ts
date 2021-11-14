export const Query = <T = any>(query: string, values?: any) => {

    const sql = mysql.format(query, values);
    console.log(sql);

    return new Promise<T>((resolve, reject) => {
        pool.query(sql, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

import users from './queries/users';
import chirps from './queries/chirps';
export default {
    users,
    chirps
}