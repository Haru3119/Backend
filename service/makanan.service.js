const db =  require('./config/mysql');
module.exports = {
    add: (data, callback) => {
        db.query(`insert into makanan set=?`,
        [data],
        (err, result) => {
            if(err) {
                return callback(err)
            } else {
                return callback(null, result)
            }
        })
    },

    get: (callback) => {
        db.query(`select * from makanan`,
        [],
        (err, result) => {
            if(err) {
                return callback(err)
            } else {
                return callback(null, result)
            }
        })
    },
    getId: (data, callback) => {
        db.query(`select * from makanan where id_mk = ?`,
        [data],
        (err, result) => {
            if(err) {
                return callback(err)
            } else {
                return callback(null, result)
            }
        })
    },
    update: (data, callback) => {
        db.query(`select * from makanan where id_mk = ?`,
        [data.id_mk],
        (err, result) => {
            if (err) {
                return callback(err)
            } else {
                db.query(`update makanan set ? where id_mk = ?`,
                [
                    data,
                    data.id_mk
                ]);
                return callback(null, result[0])
            }
        })
    },
    del: (data, callback) => {
        db.query(`select id_mk from makanan wherw id_mk = ?`,
        [data],
        (err, result) => {
            if (err) {
                return callback(err)
            } else {
                db.query(`delete from makanan where id_mk = ?`,
                    [data]);
                return callback(null, result[0])
            }
        })
    }
}