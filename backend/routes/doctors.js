const router =require("express").Router();
let doctor= require("../models/Doctor");

router.route("/add").post((req,res)=>{
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const doctorID=req.body.doctorID;
    const phoneNumber=req.body.phoneNumber;
    const email=req.body.email;
    const medicalLicenseNo=req.body.medicalLicenseNo;
    const specialization=req.body.specialization;
    const professionalExperience=req.body.professionalExperience;
    const address=req.body.address;
    const avalibleDays=req.body.avalibleDays;
    const emergencyContactNumbers=req.body.emergencyContactNumbers;
    const gender=req.body.gender;
    const relationship=req.body.relationship;
    const skillsAndTraining=req.body.skillsAndTraining;

    const newDoctor= new doctor({
        firstName,
        lastName,
        doctorID,
        phoneNumber,
        email,
        medicalLicenseNo,
        specialization,
        professionalExperience,
        address,
        avalibleDays,
        emergencyContactNumbers,
        gender,
        relationship,
        skillsAndTraining
    })

    newDoctor.save().then(()=>{
        res.json("Nurse Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/get/:id").get(async (req, res) => {
  let userId=req.params.id;
  const user=await doctor.findById(userId).
  then((doctor)=>{
    res.status(200).send({status:"User fetched",doctor})
  }).catch((err)=>{
    console.log(err.message);
    res.status(500).send({status:"Error with get user",error:err.message});
  })
});


router.route("/update/:id").put(async(req,res)=>{
  let userID=req.params.id;
  const {
    firstName,
    lastName,
    doctorID,
    phoneNumber,
    email,
    medicalLicenseNo,
    specialization,
    professionalExperience,
    address,
    avalibleDays,
    emergencyContactNumbers,
    gender,
    relationship,
    skillsAndTraining}=req.body;

  const updateDoctor={
    firstName,
    lastName,
    doctorID,
    phoneNumber,
    email,
    medicalLicenseNo,
    specialization,
    professionalExperience,
    address,
    avalibleDays,
    emergencyContactNumbers,
    gender,
    relationship,
    skillsAndTraining
  }
  const update=await doctor.findByIdAndUpdate(userID,updateDoctor)
  .then(()=>{
      res.status(200).send({status:"Doctor's data Updated"})
  }).catch((err)=>{
      console.log(err);
      res.status(500).send({status:"Error with updating data",error:err.message});
  })
})

router.route("/delete/:id").delete(async (req, res) => {
  let doctorID = req.params.id;

  try {
    await doctor.findByIdAndDelete(doctorID);
    res.status(200).send({ status: "Doctor's data deleted" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ status: "Error with deleting doctor", error: err.message });
  }
});
router.route("/").get((req, res) => {
  doctor.find()
    .then((doctor) => {
      res.json(doctor);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    });
});
module.exports=router;