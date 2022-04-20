const {
    add,
    get,
    getId,
    update,
    del
} = require('./service/makanan.service');

module.export = {
    controllerAdd: (req, res) => {
        const makanan = {
            id_mk: req.body.id_mk,
            mana_mk: req.body.mana_mk,
            desk_mk: req.body.desk_mk,
            harga_mk: req.body.harga,
        };
        add(makanan, (err, result) => {
            if (err) {
                console.log(err);
                return;
            } else {
                return res.status(200).json({
                    success:1, 
                    data:result,
                    makanan,
                });
            }
        });
    },
    controllerGet: (req, res) => {
        get((err, result) => {
            if(err) {
                console.log(err);
                return;
            } else {
                return res.json({
                    success: 1,
                    data: result,
                });
            }
        });
    },
    controllerGetId: (req, res) => {
        const body = req.body.id_mk;
        getId(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            } else {
                return res.json({
                    success: 1,
                    data: results,
                });
            }
        });
    },
    controllerUpdate: (req, res) => {
        const makanan = {
            id_mk: req.body.id_mk,
            nama_mk: req.bocy_nama_mk,
            desk_mk: req.body.harga_mk,
            harga: req.body.harga_mk,
        };
        update(makanan, (err, result) => {
            if(err) {
                console.log(err);
                return;
            } else if (!result) {
                return res.json({
                    success:0,
                    message:"Not Found",
                });
            } else {
                return res.json({
                    success:1,
                    data: result,
                });
            }
        });
    },
    controllerDelete: (req, res) => {
        const body = req.body.id_mk;
        del(body,(err, result) => {
            if (err){
                console.log(err);
                return
            }else if (!result) {
                return res.json({
                    success: 0, 
                    message: "Not Found",
                });
            } else {
                return res.json({
                    success: 1, 
                    message: "Delete Success",
                });
            }
        });
    },
}