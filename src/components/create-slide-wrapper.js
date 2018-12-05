import React, { Component } from 'react';
import {ActionCreator} from '../actionCreator/ActionCreator';
import {createGuid} from '../script/util';

export class CreateSlideWrapper extends Component{
  createNewSlide = () =>{
    let payload = {
      'id' : createGuid(),
      'title' : "",
      'description' : "",
      'activeStyle' : "slide-child-wrapper active"
    };
    var action = new ActionCreator().createNewSlide(payload);
    this.props.dispatch(action);
  };

  render() {
    return(
      <div class="left-header-wrapper">
        <button onClick={this.createNewSlide}>+</button>
      </div>
    );
  }
};
