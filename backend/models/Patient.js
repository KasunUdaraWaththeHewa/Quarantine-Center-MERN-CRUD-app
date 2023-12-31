const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const PatientSchema=new Schema({
    fullName:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type:Date,
        required:false
    },
    nationality:{
        type:String,
        required:false
    },
    nicNumber:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:false
    },
    results:{
        type:String,
        required:false
    },
    allergies:{
        type:String,
        required:false
    },
    medicalsBeingTaken:{
        type:String,
        required:false
    },
    existingMedicalCondition:{
        type:String,
        required:false
    },
    symptoms:{
        type:String,
        required:false
    },
    dateOfArrival:{
        type:Date,
        required:false
    },
    contryOfDeparture:{
        type:String,
        required:false
    },
    anyTransitPoint:{
        type:String,
        required:false
    },
    flightOrTransportDetails:{
        type:String,
        required:false
    },
    dateOfCheckIn:{
        type:Date,
        required:false
    },
    assignedRoomNo:{
        type:String,
        required:false
    },
    durationOfStay:{
        type:String,
        required:false
    },
    anySpecificRequirements:{
        type:String,
        required:false
    }

})
const Patient=mongoose.model("Patient",PatientSchema);
module.exports=Patient;