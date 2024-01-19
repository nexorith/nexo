import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import styles from "./login.module.css"
import React from 'react'
import Link from 'next/link'

const login = () => {

    return (
        <>
        <Navbar/>
            <div className={styles.wrapper}>
                <div className="title">
                    Login Form
                </div>
                <form action="#">
                    <div className={styles.field}>
                        <input type="text" required />
                        <label>Email Address</label>
                    </div>
                    <div className={styles.field}>
                        <input type="password" required/>
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
            <Footer/>
        </>
    )
}

export default login
