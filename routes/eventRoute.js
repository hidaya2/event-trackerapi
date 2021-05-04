const express = require("express")
const protect = require("../middlewares/authMiddleWare")
const { 
    createEvent, 
    getAllEvent,
    getSingleEvent,
    updateEvent, 
    deleteEvent } = require("../controllers/eventController")
const router = express.Router()

router.route("/")
.post(protect, createEvent)
.get(getAllEvent)

router.route("/:_id")
.get(protect, getSingleEvent)
.put(protect, updateEvent).delete(protect, deleteEvent)

module.exports = router