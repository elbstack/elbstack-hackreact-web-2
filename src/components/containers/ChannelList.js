import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './ChannelList.scss'
import { listChannels } from '../../redux/actions/channels'

@connect(
  state => ({
    channelList: state.channels.list
  }),
  dispatch => ({
    listChannels: () => dispatch(listChannels())
  })
)
export default class ChannelList extends Component {

  componentWillMount() {
    this.props.listChannels()
  }

  render() {

    const channels = this.props.channelList || {}
    return (
      <div className={styles.container}>
        <div className={styles.list}>
          <ul>
          { Object.keys(channels).map((itemKey)=> <li> {channels[itemKey].name}</li>) }
          </ul>
        </div>
      </div>
    )
  }
}
