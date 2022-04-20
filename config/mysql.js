const mysql = require("mysql")

db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    batabase: 'coffeeshop',
    multipleStatements: true
})

db.connect((err)=> {
    if(err) throw err
    else{
        console.log('Database Connected!')
    }
})

module.exports = db

//mysql.js digunakan untuk menghubungkan ke database