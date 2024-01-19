import React, { use, useState } from 'react';
import Link from 'next/link'; // Add the missing import statement
import { useRouter } from 'next/router';
import Router from 'next/router';
import axios from 'axios';
import { useEffect } from 'react';

export default function Dashboard() {
  
    const router = useRouter();
    const [data, setData] = useState("nothing");
    const logout = async () => {
        try {
            await axios.get("/api/users/logout");
          
            Router.push("/login");
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getUserDetails("name")
    }
    , [])   
    const getUserDetails = async (a:any) => {
        try {
            const response = await axios.get("/api/users/me");
            console.log(response.data);
            setData(response.data.data[a]);
        } catch (error) {
            console.log("error");
        }
    }
    const getUser = async () => {
        try {
            const response = await axios.get("/api/users/me");
            console.log(response.data.data);
            // create a empty object
            const obj = {};
            // add response.data.data in obj
            Object.assign(obj, response.data.data);
            // convert obj to string
            const str = JSON.stringify(obj);

            setData(str);

        } catch (error) {
            console.log("error");
        }
    }
   
    
    return (
        <>
        <div>
            <h1>Dashboard</h1>
            <button onClick={logout}>Logout</button>
            {/* <h2>{data==="nothing"?"Nothing ": <Link href={`/dashboard/${data}`}>{data }</Link>}   </h2> */}
            <h2>{data==="nothing"?"Nothing ": data}   </h2>

        </div>
        <button onClick={() => getUserDetails("phone")}>Get Phone</button>
        <button onClick={() => getUserDetails("_id")}>Get id</button>
        <button onClick={() => getUserDetails("address")}>Get Address</button>
        <button onClick={() => getUserDetails("companyname")}>Get Company Name</button>
        <button onClick={() => getUser()}>Get Data</button>
        </>)
}