let express = require("express")
let router = express.Router()
let databaseController = require("../controllers/databaseController")

router.get("/", databaseController.get_tasks)
router.post("/", databaseController.add_task)
router.post("/edit", databaseController.edit_task)

module.exports = router