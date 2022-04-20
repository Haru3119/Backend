const {
    controllerAdd,
    controllerGet,
    controllerGetId,
    controllerUpdate,
    controllerDelete
} = require('./controllers/minuman.controllers');
const router = require('express').Router();

const{} = require('./controllers/minuman.controllers')
router.post('/', controllerAdd);
router.get('/', controllerGet);
router.get('/', controllerGetId);
router.patch('/', controllerUpdate);
router.delete('/', controllerDelete);
module.export = router;