import React, { Component } from 'react';
import {ActionCreator} from '../actionCreator/ActionCreator';

export class MainWrapper extends Component{

  titleKeyUpHandler = (event) =>{
    var target = event.target;
    console.log(target.value);

    var main_wrapper = target.closest(".main-wrapper");
    var activeSlideId = main_wrapper.getAttribute("id");
    var payload = this.props.slide[activeSlideId];
    payload.title = target.value;
    var action = new ActionCreator().updateTitile(payload);
    this.props.dispatch(action);
  };

  descriptionKeyUpHandler = (event) =>{
    var target = event.target;
    console.log(target.value);
    var main_wrapper = target.closest(".main-wrapper");
    var activeSlideId = main_wrapper.getAttribute("id");
    var payload = this.props.slide[activeSlideId];
    payload.description = target.value;
    var action = new ActionCreator().updateDescription(payload);
    this.props.dispatch(action);
  };

  render() {
    return(
      <div class="main-wrapper" id={this.props.activeSlide.id}>
        <div class="main-design-wrapper">
          <input type="text" placeholder="Title" onChange={this.titleKeyUpHandler.bind(this)} value={this.props.activeSlide.title}/>
          <textarea placeholder="Description" onChange={this.descriptionKeyUpHandler.bind(this)} value={this.props.activeSlide.description}></textarea>
        </div>
        <div class={this.props.showSlide}>
          <div class="preview-container">
            <h3>{this.props.activeSlide.title ? this.props.activeSlide.title : "Preview will be here..."}</h3>
            <p>{this.props.activeSlide.description}</p>
          </div>
        </div>
      </div>
    );
  }
};
