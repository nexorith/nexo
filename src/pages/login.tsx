import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import styles from "./login.module.css"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router';
import Router from 'next/router'
import axios from 'axios';

const Login = () => {

    const [error, setError] = useState('')
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const onSignIn = async(e: any) => {
        e.preventDefault()
       try{
        const response = await axios.post("/api/users/login", user)
        console.log(response.data);
        Router.push("/dashboard");

       }catch(error){
              console.log(error);
         }

    }

    return (
        <>
            <Navbar />
            <div className={styles.wrapper}>
                <div className="title">
                    Login Form
                </div>
                <form onSubmit={onSignIn}>
                    <div className={styles.field}>

                        <input type="text" value={user.email} onChange={(e) => {
                            setUser({ ...user, email: e.target.value })
                        }} required />
                        <label>Email Address</label>
                    </div>
                    <div className={styles.field}>

                        <input type="password" value={user.password} onChange={(e) => {
                            setUser({ ...user, password: e.target.value })
                        }} required />
                        <label>Password</label>
                    </div>
                    <div className={styles.content}>
                        <div className="checkbox">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <div className={styles['pass-link']}>
                            <a href="#">Forgot password?</a>
                        </div>
                    </div>
                    <div className={styles.field}>
                        <input type="submit" value="Login" />
                    </div>
                    <div className={styles['signup-link']}>
                        Not a member? <Link href="/signup">Signup now</Link>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Login
