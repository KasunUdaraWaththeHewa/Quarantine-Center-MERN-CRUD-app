const router =require("express").Router();
let nurse= require("../models/Nurse");

router.route("/add").post((req,res)=>{
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const nurseID=req.body.nurseID;
    const phoneNumber=req.body.phoneNumber;
    const email=req.body.email;
    const nursingLicenseNo=req.body.nursingLicenseNo;
    const specialization=req.body.specialization;
    const professionalExperience=req.body.professionalExperience;
    const address=req.body.address;
    const avalibleDays=req.body.avalibleDays;
    const emergencyContactNumbers=req.body.emergencyContactNumbers;
    const gender=req.body.gender;
    const relationship=req.body.relationship;
    const skillsAndTraining=req.body.skillsAndTraining;

    const newNurse= new Nurse({
        firstName,
        lastName,
        nurseID,
        phoneNumber,
        email,
        nursingLicenseNo,
        specialization,
        professionalExperience,
        address,
        avalibleDays,
        emergencyContactNumbers,
        gender,
        relationship,
        skillsAndTraining
    })

    newNurse.save().then(()=>{
        res.json("Nurse Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req, res) => {
    const nurseID = req.params.nurseID;
    
    Nurse.findById(nurseID)
      .then((nurse) => {
        if (!nurse) {
          return res.status(404).json({ error: "Nurse not found" });
        }
        res.json(nurse);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
      });
});

router.route("/update/:id").put(async(req,res)=>{
  let userID=req.params.id;
  const {firstName,
    lastName,
    nurseID,
    phoneNumber,
    email,
    nursingLicenseNo,
    specialization,
    professionalExperience,
    address,
    avalibleDays,
    emergencyContactNumbers,
    gender,
    relationship,
    skillsAndTraining}=req.body;

  const updateNurse={
    firstName,
        lastName,
        nurseID,
        phoneNumber,
        email,
        nursingLicenseNo,
        specialization,
        professionalExperience,
        address,
        avalibleDays,
        emergencyContactNumbers,
        gender,
        relationship,
        skillsAndTraining
  }
  const update=await nurse.findByIdAndUpdate(userID,updateNurse)
  .then(()=>{
      res.status(200).send({status:"nurse's data Updated",user:update})
  }).catch((err)=>{
      console.log(err);
      res.status(500).send({status:"Error with updating data",error:err.message});
  })
})

module.exports=router;