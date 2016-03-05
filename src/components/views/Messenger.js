import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from '../elements/Profile'
import ListChannelsBtn from '../elements/ListChannelsBtn'
import JoinedChannelList from '../elements/JoinedChannelList'
import TeamLogo from '../elements/TeamLogo'
import IntroText from '../elements/IntroText'
import styles from './Messenger.scss'
import ChannelList from '../containers/ChannelList'

@connect(
  state => ({
    sendbird: state.sendbird
  })
)
export default class Messenger extends Component {
  state = {
    channelListVisible: false
  }

  toggleChannelList() {
    this.setState({channelListVisible: !this.state.channelListVisible})
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.nav}>
          <TeamLogo/>
          <Profile userName={this.props.sendbird.user_name}/>
          <ListChannelsBtn onClick={this.toggleChannelList.bind(this)}/>
          <JoinedChannelList />
        </div>
        <div className={styles.chat}>
          { this.state.channelListVisible ? <ChannelList /> : null }
          <IntroText />
        </div>
      </div>
    )
  }
}
