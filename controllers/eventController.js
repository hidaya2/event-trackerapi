const Event = require("../models/eventSchema")

//creating new event
const createEvent = async (req,res) => {
    const newEvent = new Event({
        event:req.body.event,
        location:req.body.location,
        day:req.body.day,
        note:req.body.note,
    })
    await newEvent.save()
    res.status(201).json(newEvent)
}

//get all event
const getAllEvent = async (req,res) => {
    const event = await Event.find()
    res.json(event)
}

//get an event
const getSingleEvent = async (req, res) => {
    const event = await Event.findById(req.params._id);
    res.json(event);
}
//update a event
const updateEvent = async (req, res) => {
    const foundEvent = await Event.findById(req.params._id);
    if (foundEvent) {
      (foundEvent.event = req.body.event),
        (foundEvent.location = req.body.location),
        (foundEvent.day = req.body.day);
        (foundEvent.note= req.body.note)
  
      const updatedEvent = await foundEvent.save();
      res.json({ updatedEvent: updatedEvent });
    }
  };
  
  //delete a event
  const deleteEvent = async (req,res)=>{
      const foundEvent = await Event.findById(req.params._id)
      if (foundEvent) {
          foundEvent.remove()
          res.json({msg:`event with id: $(req.params._id) removed`})
      } else {
          res.status(404).json({error:"Event not found"})
      }
  }
  
  module.exports = {
    createEvent,
    getAllEvent,
    getSingleEvent,
    updateEvent,deleteEvent
  };
  
