import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from "react";
import axios from 'axios';

function DoctorForm() {
  const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [doctorID, setDoctorID] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [medicalLicenseNumber, setMedicalLicenseNumber] = useState("");
    const [specialization, setSpecilization] = useState("");
    const [experience, setExperience] = useState("");
    const [address, setAddress] = useState("");
    const [avalibleDays, setAvalibleDays] = useState("");
    const [emergencycontactNumber, setEmergencycontactNumber] = useState("");
    const [gender, setGender] = useState("");
    const [Relationship, setRelationship] = useState("");
    const [skills, setSkills] = useState("");
    
    function sendData(e){
      e.preventDefault();
      const newDoctor ={
        firstName,lastName,doctorID,phoneNumber,email,medicalLicenseNumber,specialization,experience,address,avalibleDays,emergencycontactNumber,gender,Relationship,skills
      }
      axios.post("http://localhost:8070/doctor/add",newDoctor).then(()=>{
        alert("Doctor added");
      }).catch((err)=>{
        alert(err)
      })
    }

  return (
    <Form>
      <Row className="mb-3">
        <Col>
            <Form.Label>First name</Form.Label>
          <Form.Control placeholder="First name" onChange={(e) => setFirstName(e.target.value)}  />
        </Col>
        <Col>
            <Form.Label>Last name</Form.Label>
          <Form.Control placeholder="Last name"  onChange={(e) => setLastName(e.target.value)}  />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
            <Form.Label>Doctor ID</Form.Label>
          <Form.Control placeholder="Doctor ID" onChange={(e) => setDoctorID(e.target.value)}  />
        </Col>
        <Col>
            <Form.Label>Phone number</Form.Label>
          <Form.Control placeholder="Phone number"  onChange={(e) => setPhoneNumber(e.target.value)} />
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email"  onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Col>
            <Form.Label>Medical license Number</Form.Label>
          <Form.Control placeholder="Medical license Number" onChange={(e) => setMedicalLicenseNumber(e.target.value)}  />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
            <Form.Label>Specialization</Form.Label>
          <Form.Control placeholder="Specialization" onChange={(e) => setSpecilization(e.target.value)}  />
        </Col>
        <Col>
            <Form.Label>Professional Experience</Form.Label>
          <Form.Control placeholder="Professional Experience" onChange={(e) => setExperience(e.target.value)}  />
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1" onChange={(e) => setAddress(e.target.value)} >
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Row className="mb-3">
        <Col>
            <Form.Label>Available Days</Form.Label>
          <Form.Control placeholder="Available Days" onChange={(e) => setAvalibleDays(e.target.value)}  />
        </Col>
        <Col>
            <Form.Label>Emergency Contact number</Form.Label>
          <Form.Control placeholder="Emergency Contact number" onChange={(e) => setEmergencycontactNumber(e.target.value)}  />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col >
            <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Gender</Form.Label>
                <Form.Select defaultValue="Male">
                    <option>Male</option>
                    <option>Female</option>
                </Form.Select>
            </Form.Group>
        </Col>
        <Col >
            <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Relationship</Form.Label>
                <Form.Select defaultValue="Male">
                    <option>Married</option>
                    <option>Unmarried</option>
                </Form.Select>
            </Form.Group>
        </Col>
        
      </Row>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Enter skills , Training and Certification details in pdf format</Form.Label>
        <Form.Control type="file"  onChange={(e) => setSkills(e.target.value)} />
      </Form.Group>
      <br />
      <Row>
            <Col>
                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
            </Col>
            <Col>
            
            </Col>
      </Row>
      <br />
      <br />
      <Button variant="success" onClick={sendData}>Enter</Button>{' '}
      <Button variant="secondary">Search</Button>{' '}
      <Button variant="primary">Update</Button>{' '}
      <Button variant="danger">Delete</Button>{' '}
      <Button variant="success">Clear</Button>{' '}
      
    </Form>
  );
}

export default DoctorForm;