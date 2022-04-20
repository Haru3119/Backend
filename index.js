const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser")
const db = require("./config/mysql");
const app = express();
const routes = require('./routers/makanan.routers');
const port = 8080;

app.use(express.json());
app.use('/', routes);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {});

//*CRUD MAKANAN

app.get('/coffeeshop/makanan', (req, res) => {
    var id_mk = req.params.id_mk;
    var nama_mk =req.body.nama_mk;
    var harga = req.body.harga;
    res.end('Menampilkan makanan : ' +nama_mk+ ' dengan harga' +harga)
});

app.post('/coffeeshop/tambah_makanan', (req, res) => {
    var id_mk = req.params.id_mk;
    var nama_mk =req.body.nama_mk;
    var harga = req.body.harga;
    res.end(nama_mk+' dengan harga Rp. ' +harga+  ' telah ditambahkan.' )
});

app.delete('/coffeeshop/hapus_makanan', (req, res) => {
    var id_mk   = req.params.id_mk;
    var nama_mk = req.body.nama_mk;
    var harga   = req.body.harga;
    res.end(nama_mk+ ' , berhasil dihapus')
});

app.put('/coffeeshop/perbarui_makanan', (req, res) => {
    var id_mk   = req.params.id_mk;
    var nama_mk = req.body.nama_mk;
    var harga   = req.body.harga;
    res.end(nama_mk+ ' , berhasil diperbarui')
});

//*CRUD MINUMAN

app.get('/coffeeshop/minuman', (req, res) => {
    var id_mn = req.params.id_mn;
    var nama_mn =req.body.nama_mn;
    var harga = req.body.harga;
    res.end('Menampilkan minuman : ' +nama_mn+ ' dengan harga' +harga)
});

app.post('/coffeeshop/tambah_minuman', (req, res) => {
    var id_mn = req.params.id_mn;
    var nama_mn =req.body.nama_mn;
    var harga = req.body.harga;
    res.end(nama_mn+' dengan harga Rp. ' +harga+  ' telah ditambahkan.' )
});

app.delete('/coffeeshop/hapus_minuman', (req, res) => {
    var id_mn   = req.params.id_mn;
    var nama_mn = req.body.nama_mn;
    var harga   = req.body.harga;
    res.end(nama_mn+ ' , berhasil dihapus')
});

app.put('/coffeeshop/perbarui_minuman', (req, res) => {
    var id_mn   = req.params.id_mn;
    var nama_mn = req.body.nama_mn;
    var harga   = req.body.harga;
    res.end(nama_mn+ ' , berhasil diperbarui')
});

app.listen(port, () => {
    console.log(`Server di port ${port}`);
});