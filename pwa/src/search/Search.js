import React, { Component } from 'react'
import styles from './Search.module.scss'

export default class Search extends Component {
  render() {
    return (
      <div className={styles.search}>
        <input placeholder="What brings you here today?"/>
        <div className={styles.icon}/>
      </div>
    )
  }
}