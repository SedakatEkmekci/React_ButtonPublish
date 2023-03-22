import React from 'react'
import styles from './styles.module.css'



export const Button = (props) => {
  return <button className={styles.test}{...props}>{props.text}</button>
}