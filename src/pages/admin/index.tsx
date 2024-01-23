// Import necessary React components and hooks
import React, { useState } from 'react';
import './admin.css'; // Import the CSS file for styles
import axios from 'axios';
import Router from 'next/router';


// Define the AdminLogin component
const AdminLogin = () => {
  // State variables to store adminname and password

  const [admin, setAdmin] = useState({
    adminname: "",
    password: "",
});
  const  signUp =async() => {
    try{
      const response = await axios.post("/api/admin/signup", 
      {
        adminname: "nexoadm1",
        password: "nexoadm1",
        })
      console.log(response.data);
      Router.push("/admin/dashboard");

     }catch(error){
            console.log(error);
       }


    
  }
  // Function to handle form submission
  const handleLogin = async(e:any) => {
    e.preventDefault();
    console.log(admin);

    try{
      const response = await axios.post("/api/admin/", admin)
      console.log(response.data);
      Router.push("/admin/dashboard");

     }catch(error){
            console.log(error);
       }


    // In a real application, you would perform authentication here
    // For simplicity, let's just log the credentials for now
   
  };

  // Render the login form
  return (
    <div className="container">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={admin.adminname}
            onChange={(e) => setAdmin({ ...admin, adminname: e.target.value })}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={admin.password}
            onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <button onClick={signUp}>Signup</button>
    </div>
  );
};

// Export the AdminLogin component
export default AdminLogin;
