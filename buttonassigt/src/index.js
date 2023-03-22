import React, { useState } from 'react'
import styles from './styles.module.css'


export const Button = (props) => {


  return (
    < button {...props} className={`${styles.button} ${styles[props.text]}`}> {`${props.text} Button`}</button >

  )

}