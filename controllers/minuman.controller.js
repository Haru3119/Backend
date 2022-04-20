const {
    add,
    get,
    getId,
    update,
    del
} = require('./service/minuman.service');

module.export = {
    controllerAdd: (req, res) => {
        const minuman = {
            id_mn: req.body.id_mn,
            mana_mn: req.body.mana_mn,
            desk_mn: req.body.desk_mn,
            harga_mn: req.body.harga,
        };
        add(minuman, (err, result) => {
            if (err) {
                console.log(err);
                return;
            } else {
                return res.status(200).json({
                    success:1, 
                    data:result,
                    minuman,
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
        const body = req.body.id_mn;
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
        const minuman = {
            id_mn: req.body.id_mn,
            nama_mn: req.bocy_nama_mn,
            desk_mn: req.body.harga_mn,
            harga: req.body.harga_mn,
        };
        update(minuman, (err, result) => {
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
        const body = req.body.id_mn;
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