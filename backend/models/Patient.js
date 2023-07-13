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
        required:true
    },
    nationality:{
        type:String,
        required:true
    },
    nicNumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    healthInfo:{
        type:String,
        required:true
    },
    allergies:{
        type:String,
        required:false
    },
    medicalsBeingTaken:{
        type:String,
        required:true
    },
    emergencyContactNumber:{
        type:String,
        required:true
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
        required:true
    },
    contryOfDeparture:{
        type:String,
        required:true
    },
    anyTransitPoint:{
        type:String,
        required:false
    },
    flightOrTransportDetails:{
        type:String,
        required:true
    },
    dateOfCheckIn:{
        type:Date,
        required:true
    },
    assignedRoomNo:{
        type:String,
        required:true
    },
    durationOfStay:{
        type:String,
        required:true
    },
    anySpecificRequirements:{
        type:String,
        required:false
    }

})
const Patient=mongoose.model("Patient",PatientSchema);
module.exports=Patient;