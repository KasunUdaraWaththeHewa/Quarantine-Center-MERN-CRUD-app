const router =require("express").Router();
let staff= require("../models/staff");

router.route("/add").post((req,res)=>{
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const employeeID=req.body.employeeID;
    const phoneNumber=req.body.phoneNumber;
    const email=req.body.email;
    const jobRole=req.body.jobRole;
    const address=req.body.address;
    const staffID=req.body.staffID;
    const emergencyContactNumber=req.body.emergencyContactNumber;
    const gender=req.body.gender;
    const relationship=req.body.relationship;
    const skills=req.body.skills;

    const newStaff= new staff({
        firstName,
        lastName,
        employeeID,
        phoneNumber,
        email,
        jobRole,
        address,
        staffID,
        emergencyContactNumber,
        gender,
        relationship,
        skills
    })

    newStaff.save().then(()=>{
        res.json("Staff Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/get/:id").get(async (req, res) => {
  let userId=req.params.id;
  const user=await staff.findById(userId).
  then((staff)=>{
    res.status(200).send({status:"User fetched",staff})
  }).catch((err)=>{
    console.log(err.message);
    res.status(500).send({status:"Error with get user",error:err.message});
  })
});
  
router.route("/update/:id").put(async(req,res)=>{
    let userID=req.params.id;
    const {firstName, lastName, employeeID, phoneNumber, email, jobRole, address, staffID, emergencyContactNumber, gender, relationship, skills}=req.body;
    const updateStaff={
        firstName,
        lastName,
        employeeID,
        phoneNumber,
        email,
        jobRole,
        address,
        staffID,
        emergencyContactNumber,
        gender,
        relationship,
        skills
    }
    const update=await staff.findByIdAndUpdate(userID,updateStaff)
    .then(()=>{
        res.status(200).send({status:"Staff member Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })
})

router.route("/delete/:id").delete(async (req, res) => {
    let staffID = req.params.id;
  
    try {
      await staff.findByIdAndDelete(staffID);
      res.status(200).send({ status: "Staff's data deleted" });
    } catch (err) {
      console.log(err.message);
      res.status(500).send({ status: "Error with deleting staff", error: err.message });
    }
  });

  router.route("/").get((req, res) => {
    staff.find()
      .then((staff) => {
        res.json(staff);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
      });
  });
  

module.exports=router;