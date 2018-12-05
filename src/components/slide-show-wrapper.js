
import React, { Component } from 'react';
import {ActionCreator} from '../actionCreator/ActionCreator';
import {createGuid} from '../script/util';

let slideIndex = 0;

export class ShowSlideWrapper extends Component{

  show = (event) =>{
    slideIndex = 0;
    var fristSlideId = Object.keys(this.props.slide)[slideIndex];
    if(!fristSlideId)
      return;
    var fristSlide   = this.props.slide[fristSlideId];
    fristSlide['activeStyle'] = "slide-child-wrapper active";
    var action = new ActionCreator().selectSlide(fristSlide);
    this.props.dispatch(action);
    let showSlide = "main-preview-wrapper";
    var target = event.target;
    if(target.classList.contains("play")){
      target.classList.add("stop");
      target.classList.remove("play");
      target.innerHTML = "■";
      showSlide = "main-preview-wrapper slide-show";
    }else{
      target.classList.add("play");
      target.classList.remove("stop");
      target.innerHTML = "▶";
    }
    var action = new ActionCreator().showSlide({'showSlide':showSlide});
    this.props.dispatch(action);
  };

  showNextSlide = (event) =>{
    slideIndex++;
    var fristSlideId = Object.keys(this.props.slide)[slideIndex];

    if(!fristSlideId){
      slideIndex--;
      var target = event.target;
      target.classList.add("no-slide");
      this.addEffectToButton(target);
      return;
    }
    var fristSlide   = this.props.slide[fristSlideId];
    fristSlide['activeStyle'] = "slide-child-wrapper active";
    var action = new ActionCreator().selectSlide(fristSlide);
    this.props.dispatch(action);

  };

  showPreviousSlide = (event) =>{
    slideIndex--;
    var fristSlideId = Object.keys(this.props.slide)[slideIndex];
    if(!fristSlideId){
      slideIndex++;
      var target = event.target;
      this.addEffectToButton(target);
      return;
    }
    var fristSlide   = this.props.slide[fristSlideId];
    fristSlide['activeStyle'] = "slide-child-wrapper active";
    var action = new ActionCreator().selectSlide(fristSlide);
    this.props.dispatch(action);
  };

  addEffectToButton = (target) =>{
    target.classList.add("no-slide");
    setTimeout(function(){
      target.classList.remove("no-slide");
    },500);
  };

  render() {
    return(
      <div class="left-header-wrapper slide-show">
        <button onClick={this.showPreviousSlide.bind(this)}>&lt;</button>
        <button class="play" onClick={this.show.bind(this)}>▶</button>
        <button onClick={this.showNextSlide.bind(this)}>&gt;</button>
      </div>
    );
  }
};
