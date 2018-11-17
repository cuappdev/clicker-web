import React, { Component } from 'react';
import EmptyMonkeyIcon from '../../assets/EmptyMonkeyIcon.png';

class EmptyStateSection extends Component {
  propTypes: {
    adminSession: boolean, 
  }

  render() {
    let title, subtitle;
    if (this.props.adminSession) {
      title = 'Nothing to see here';
      subtitle = 'You haven\'t made any polls yet! Try it out above.';
    } else {
      title = 'Nothing to see yet';
      subtitle = 'Waiting for the host to post a poll...';
    }
    const emptyStateSection = (
      <div className='empty-state'>
        <img src={EmptyMonkeyIcon} alt="No Polls"></img>
        <div className='empty-state-title'>{title}</div>
        <div className='empty-state-subtitle'>{subtitle}</div>
      </div>
    );
    return emptyStateSection;
  }
}

export default EmptyStateSection;
