"use strict"

const router = require('express').Router();
const batteryController = require("../controllers/batteryInMongoDB")

router.route("/")
.get(batteryController.getAllBatteries)
.post(batteryController.createBattery)


router.route("/:id")
.get(batteryController.getBattery)
.put(batteryController.updateBattery)
.delete(batteryController.deleteBattery)

module.exports = router;