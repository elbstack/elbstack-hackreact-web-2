import React, { Component } from 'react'
import styles from './TeamLogo.scss'

export default class TeamLogo extends Component {

  render() {
    return (
      <div>
        <span className={styles.logo}></span>
        <h2>Krampfadergeschwader</h2>
      </div>
    )
  }
}
