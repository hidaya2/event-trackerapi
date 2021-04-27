const mongoose =require("mongoose")

const eventSchema=mongoose.Schema({
    event: {
       type:String,
       required:true,
    },
    location: {
        type:String,
        required:true,
    },
    day:{
        type:String,
        require:true,
    },
    note: {
        type:String,
        required:true,
    },
}, 
   {
        timestamps:true,
})

const Event = mongoose.model("Event",eventSchema)
module.exports = Event;