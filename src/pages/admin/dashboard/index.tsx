import React, { use, useState } from 'react';
import Link from 'next/link'; // Add the missing import statement
import { useRouter } from 'next/router';
import Router from 'next/router';
import axios from 'axios';
import { useEffect } from 'react';

export default function Dashboard() {
  
    const router = useRouter();
    const [data, setData] = useState("nothing");
   

  

   
    
    return (
        <>
        <div>
            <h1>Dashboard</h1>

            {/* <h2>{data==="nothing"?"Nothing ": <Link href={`/dashboard/${data}`}>{data }</Link>}   </h2> */}
            <h2>{data==="nothing"?"Nothing ": data}   </h2>

        </div>
      
        </>)
}