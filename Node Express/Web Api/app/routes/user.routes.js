const usersController = require('../controllers/user.controller');

const router = require('express').Router();

router.get("/", usersController.findAll);

router.get("/:id", usersController.getById)

router.post("/", usersController.create);

router.delete("/:id", usersController.delete)

router.put('/:id', usersController.update)

router.delete("/", usersController.deleteAll)

module.exports = router;