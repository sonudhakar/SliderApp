import React, { Component } from 'react';
import {ActionCreator} from '../actionCreator/ActionCreator';
import {createGuid} from '../script/util';

export class AppFooterWrapper extends Component{

  selectSlide = (event) =>{
    this.props.slide['activeStyle'] = "slide-child-wrapper active";
    var action = new ActionCreator().selectSlide(this.props.slide);
    this.props.dispatch(action);
  };

  deleteSlide = (event) =>{
    var payload = {
      'slide' : this.props.slide,
      'newSlideId' : ""
    };
    var target = event.target;
    target = target.parentElement;
    if(target.nextElementSibling){
      target = target.nextElementSibling;
      var slideId = target.getAttribute("id");
      payload.newSlideId = slideId;
    }else if(target.previousElementSibling){
      target = target.previousElementSibling;
      var slideId = target.getAttribute("id");
      payload.newSlideId = slideId;
    }

    var action = new ActionCreator().deleteSlide(payload);
    this.props.dispatch(action);
  }

  render() {
    return(
      <div class={this.props.slide.activeStyle} id={this.props.slide.id} onClick={this.selectSlide.bind(this)}>
        {
          // <div class="delete-slide" onClick={this.deleteSlide.bind(this)}>-</div>
        }
        <h3>{this.props.slide.title}</h3>
        <p>{this.props.slide.description}</p>
      </div>
    );
  }
};
