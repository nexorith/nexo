"use client"
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import styles from "./login.module.css"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';



const Signup = () => {

    const [error, setError] = useState('')
    const router = useRouter()
    const [user, setUser] = useState({
        email: "",
        name: "",
        phone: "",
        companyname: "",
        address: "",
        password: "",
    });

    const isValidEmail = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        return emailRegex.test(email);
    }
    const onSignup = async (e: any) => {



        e.preventDefault()
        try {
            const response = await axios.post("/api/users/register", user)
            console.log(response.data);
            router.push("/login");
            if (response.status === 400) {
                setError("This email is already registered");

            }
            if (response.status === 200) {
                setError("");
                router.push("/login");
            }



        } catch (error) {
            console.log(error);
        }

























        // const isValidEmail = (email: string) => {
        //     const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        //     return emailRegex.test(email);
        // }

        // const handleSubmit = async(e: any) => {
        //     e.preventDefault();
        //     const email = e.target[0].value;
        //     const name = e.target[1].value;
        //     const phone = e.target[2].value;
        //     const companyname = e.target[3].value;
        //     const address = e.target[4].value;
        //     const password = e.target[5].value;
        //     console.log(email, name, phone, companyname, address, password);

        //     if (!isValidEmail(email)) {
        //         setError('Invalid Email')
        //         return;
        //     }
        //     if (!password||password.length < 6) {
        //         setError('Password must be at least 6 characters')
        //         return;
        //     }
        //     try {
        //         const res = await fetch("/api/register", {
        //           method: "POST",
        //           headers: {
        //             "Content-Type": "application/json",
        //           },
        //           body: JSON.stringify({
        //             email,
        //             password,
        //             name,
        //             phone,
        //             companyname,
        //             address,

        //           }),
        //         }); 


        //  
        //     };



    }

    return (
        <>
            <Navbar />
            <div className={styles.wrapper}>
                <div className="title">
                    Sign Up
                </div>
                <form onSubmit={onSignup}>
                    <div className={styles.field}>

                        <input type="text" value={user.email} onChange={(e) => {
                            setUser({ ...user, email: e.target.value })
                        }} required />
                        <label>Email Address</label>
                    </div>
                    <div className={styles.field}>

                        <input type="text" value={user.name} onChange={(e) => {
                            setUser({ ...user, name: e.target.value })
                        }} required />
                        <label>Name</label>
                    </div>
                    <div className={styles.field}>

                        <input type="text" value={user.phone} onChange={(e) => {
                            setUser({ ...user, phone: e.target.value })
                        }} required />
                        <label>Phone</label>
                    </div>
                    <div className={styles.field}>

                        <input type="text" value={user.companyname} onChange={(e) => {
                            setUser({ ...user, companyname: e.target.value })
                        }} required />
                        <label>Company Name</label>

                    </div>
                    <div className={styles.field}>

                        <input type="text" value={user.address} onChange={(e) => {
                            setUser({ ...user, address: e.target.value })
                        }} required />
                        <label>Address</label>
                    </div>
                    <div className={styles.field}>

                        <input type="password" value={user.password} onChange={(e) => {
                            setUser({ ...user, password: e.target.value })
                        }} required />
                        <label>Password</label>
                    </div>



                    <div className={styles.field}>
                        <input type="submit" value="Login" />
                    </div>
                    {error && <p className={styles.error}>{error}</p>}
                    <div className={styles['signup-link']}>
                        Already Signed Up? <Link href="/login">Login now</Link>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Signup;
