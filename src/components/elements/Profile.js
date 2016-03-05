import React from 'react'
import styles from './Profile.scss'
import { IndexLink } from 'react-router'
export default class Profile extends React.Component {

  render() {
    return (
      <nav className="text-center">
        <div className={styles.userContainer}>
          <span className={styles.user}>
            <span>{this.props.userName}</span>
            <IndexLink to="/" className={styles.signout} />
          </span>
        </div>
      </nav>
    )
  }
}
