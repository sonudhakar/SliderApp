import React, { Component } from 'react';

export class UserInfoWrapper extends Component{
  render() {
    return(
      <div class="right-header-wrapper">
          <h3>{this.props.name}</h3>
      </div>
    );
  }
};
