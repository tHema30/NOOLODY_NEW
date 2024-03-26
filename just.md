 // Send welcome email

   const nodemailer = asyncHandler(async (req, res) => {
    const sendMail = await transporter.sendMail({
    from: 'tkematharsini03@gmail.com',
    to: 'uthayakumarabiram@gmail.com',
    subject: 'Welcome!',
    text: `Hello ${name}, welcome to our application!`
 })
 .then(() => {
    res.json(newUser);
 })
 .catch((error) => {
    res.status(500).json({ error: error.message });
 });
 });





    export{
        authUser,
        registerUser,
        logoutUser,
        getUserProfile,
        updateUserProfile,
        nodemailer
    };
user controller.js........................


import nodemailer from  'nodemailer' ;


const transporter = nodemailer.createTransport({
    service: 'Gmail',
    port:587,
    auth: {
      user: 'tkematharsini03@gmail.com',
      pass: 'fgxlrdfptzgnzhwz'
    }
  });
  

export default transporter;

nodemailer.model....................


 <div class="form first">
                <div class="details personal">
                    <span class="title">Personal Details</span>
                    <div class="fields">
                        <div class="input-field">
                            <label>Full Name</label>
                            <input type="text" placeholder="Enter your name" required/>
                        </div>
                        <div class="input-field">
                            <label>Date of Birth</label>
                            <input type="date" placeholder="Enter birth date" required/>
                        </div>
                        <div class="input-field">
                            <label>Email</label>
                            <input type="text" placeholder="Enter your email" required/>
                        </div>
                        <div class="input-field">
                            <label>Mobile Number</label>
                            <input type="number" placeholder="Enter mobile number" required/>
                        </div>
                        <div class="input-field">
                            <label>Gender</label>
                            <select required>
                                <option disabled selected>Select gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                            </select>
                        </div>
                        <div class="input-field">
                            <label>Occupation</label>
                            <input type="text" placeholder="Enter your ccupation" required/>
                        </div>
                    </div>
                </div>
                <div class="details ID">
                    <span class="title">Identity Details</span>
                    <div class="fields">
                        <div class="input-field">
                            <label>ID Type</label>
                            <input type="text" placeholder="Enter ID type" required/>
                        </div>
                        <div class="input-field">
                            <label>ID Number</label>
                            <input type="number" placeholder="Enter ID number" required/>
                        </div>
                        <div class="input-field">
                            <label>Issued Authority</label>
                            <input type="text" placeholder="Enter issued authority" required/>
                        </div>
                        <div class="input-field">
                            <label>Issued State</label>
                            <input type="text" placeholder="Enter issued state" required/>
                        </div>
                        <div class="input-field">
                            <label>Issued Date</label>
                            <input type="date" placeholder="Enter your issued date" required/>
                        </div>
                        <div class="input-field">
                            <label>Expiry Date</label>
                            <input type="date" placeholder="Enter expiry date" required/>
                        </div>
                    </div>
                    <button class="nextBtn">
                        <span class="btnText">Next</span>
                        <i class="uil uil-navigator"></i>
                    </button>
                </div> 
            </div>
            <div class="form second">
                <div class="details address">
                    <span class="title">Address Details</span>
                    <div class="fields">
                        <div class="input-field">
                            <label>Address Type</label>
                            <input type="text" placeholder="Permanent or Temporary" required/>
                        </div>
                        <div class="input-field">
                            <label>Nationality</label>
                            <input type="text" placeholder="Enter nationality" required/>
                        </div>
                        <div class="input-field">
                            <label>State</label>
                            <input type="text" placeholder="Enter your state" required/>
                        </div>
                        <div class="input-field">
                            <label>District</label>
                            <input type="text" placeholder="Enter your district" required/>
                        </div>
                        <div class="input-field">
                            <label>Block Number</label>
                            <input type="number" placeholder="Enter block number" required/>
                        </div>
                        <div class="input-field">
                            <label>Ward Number</label>
                            <input type="number" placeholder="Enter ward number" required/>
                        </div>
                    </div>
                </div>
                <div class="details family">
                    <span class="title">Family Details</span>
                    <div class="fields">
                        <div class="input-field">
                            <label>Father Name</label>
                            <input type="text" placeholder="Enter father name" required/>
                        </div>
                        <div class="input-field">
                            <label>Mother Name</label>
                            <input type="text" placeholder="Enter mother name" required/>
                        </div>
                        <div class="input-field">
                            <label>Grandfather</label>
                            <input type="text" placeholder="Enter grandfther name" required/>
                        </div>
                        <div class="input-field">
                            <label>Spouse Name</label>
                            <input type="text" placeholder="Enter spouse name" required/>
                        </div>
                        <div class="input-field">
                            <label>Father in Law</label>
                            <input type="text" placeholder="Father in law name" required/>
                        </div>
                        <div class="input-field">
                            <label>Mother in Law</label>
                            <input type="text" placeholder="Mother in law name" required/>
                        </div>
                    </div>
                    <div class="buttons">
                        <div class="backBtn">
                            <i class="uil uil-navigator"></i>
                            <span class="btnText">Back</span>
                        </div>
                        
                        <button class="sumbit">
                            <span class="btnText">Submit</span>
                            <i class="uil uil-navigator"></i>
                        </button>
                    </div>
                </div> 
            </div>
        </form>




import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserStyle = {
  width: '80%',
  margin: '20px auto',
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '10px',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '20px',
};

const thTdStyle = {
  border: '1px solid #dddddd',
  textAlign: 'left',
  padding: '8px',
};

const User = () => {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:7300/api/admin/all-users');
  //       setUsers(response.data);
  //     } catch (error) {
  //       console.error('Error fetching users:', error);
  //     }
  //   };

  //   fetchUsers();
  // }, []);
  useEffect(() => {
    // Fetch dress designs from the server
    axios.get('http://localhost:7300/api/admin/all-users') // Update the URL with your actual API endpoint
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });
  }, []);


  return (
    <div style={UserStyle} className="admin-table">
      <h2>Admin Users Table</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thTdStyle}>Email</th>
            <th style={thTdStyle}>Name</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td style={thTdStyle}>{user.email}</td>
              <td style={thTdStyle}>{user.name}</td>
              {/* Add more cells based on your user schema */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
