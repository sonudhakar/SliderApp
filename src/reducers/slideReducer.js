import {CREATE_NEW_SLIDE,UPDATE_TITLE,UPDATE_DESCRIPTION,SELECT_SLIDE,DELETE_SLIDE,SHOW_SLIDE,action} from '../actions/Actions.js';
import { isNull } from 'util';
import {createGuid} from '../script/util';

const slideId = createGuid();
const activeSlide =  {
  'id' : slideId,
  'title' : "",
  'description' :"",
  'activeStyle': "slide-child-wrapper active"
};
const slide = {};
slide[slideId] = activeSlide;

  const initialState ={
    slide: slide,
    activeSlide: activeSlide,
    showSlide: "main-preview-wrapper"
  };

  function updateSlide(payload) {
    if(!payload)
      return;

    slide[payload.id] = payload;
    removeStyle(payload);
    return slide;
  }

  function deleteSlide(payload) {
    if(!payload)
      return;

    delete slide[payload.id];
    return slide;
  }

  function removeStyle(activeSlide){
    Object.keys(slide).map((slideId)=>{
      let slideObj = slide[slideId];
       if(slide[slideId].id != activeSlide.id){
         slide[slideId].activeStyle = "slide-child-wrapper";
       }
    });
  }

  export default function SlideReducer(state=initialState,action){

    switch (action.type) {
      case CREATE_NEW_SLIDE:
      case UPDATE_TITLE:
      case UPDATE_DESCRIPTION:
      case SELECT_SLIDE:
      case SELECT_SLIDE:
        return{
          ...state,
          slide: updateSlide(action.payload),
          activeSlide : action.payload
        }
      case DELETE_SLIDE:
        return{
          ...state,
          slide: deleteSlide(action.payload.slide),
          activeSlide : (action.payload.newSlideId && slide[action.payload.newSlideId]) ? slide[action.payload.newSlideId] : {'id' : createGuid(),'title' : "",'description' : "",'activeStyle': "slide-child-wrapper active"}
        }

      case SHOW_SLIDE:
        return{
          ...state,
          showSlide : action.payload.showSlide
        }
      default:
        return state;
    }
  }
