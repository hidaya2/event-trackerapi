const express = require("express")
const { 
    createEvent, 
    getAllEvent,
    getSingleEvent,
    updateEvent, 
    deleteEvent } = require("../controllers/eventController")
const router = express.Router()

router.route("/")
.post(createEvent)
.get(getAllEvent)

router.route("/:_id")
.get(getSingleEvent)
.put(updateEvent).delete(deleteEvent)

module.exports = router