const db =  require('./config/mysql');
module.exports = {
    add: (data, callback) => {
        db.query(`insert into minuman set=?`,
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
        db.query(`select * from minuman`,
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
        db.query(`select * from minuman where id_mn = ?`,
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
        db.query(`select * from minuman where id_mn = ?`,
        [data.id_mn],
        (err, result) => {
            if (err) {
                return callback(err)
            } else {
                db.query(`update minuman set ? where id_mn = ?`,
                [
                    data,
                    data.id_mn
                ]);
                return callback(null, result[0])
            }
        })
    },
    del: (data, callback) => {
        db.query(`select id_mn from minuman wherw id_mn = ?`,
        [data],
        (err, result) => {
            if (err) {
                return callback(err)
            } else {
                db.query(`delete from minuman where id_mn = ?`,
                    [data]);
                return callback(null, result[0])
            }
        })
    }
}