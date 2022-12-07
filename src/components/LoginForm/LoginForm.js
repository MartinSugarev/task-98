import React from 'react'
import styles from '../LoginForm/LoginForm.module.css'


export default function LoginForm(){

    return(
         <form className={styles.form}>
               <label className={styles.label}  >Name</label>
               <input className={styles.input} name="username" id="username" type="text"/>
               <label className={styles.label} >Password</label>
               <input className={styles.input} name="password" id="password" type="password"/>
               <button className={styles.submit} type="submit" >Submit</button>
           </form>
    )
}