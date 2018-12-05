
import {CREATE_NEW_SLIDE,UPDATE_TITLE,UPDATE_DESCRIPTION,UPDATE_USER,SELECT_SLIDE,DELETE_SLIDE,SHOW_SLIDE} from '../actions/Actions'

export class ActionCreator{

  updateTitile = (payload) => {
    return { type: UPDATE_TITLE, payload : payload };
  }

  createNewSlide = (payload) => {
    return { type: CREATE_NEW_SLIDE,payload : payload };
  }

  updateUser = (contact) => {
    return { type: UPDATE_USER, contact : contact};
  }

  updateDescription = (payload) => {
    return { type: UPDATE_DESCRIPTION, payload : payload };
  }

  selectSlide = (payload) =>{
    return {type : SELECT_SLIDE, payload : payload};
  }

  deleteSlide = (payload) =>{
    return {type : DELETE_SLIDE, payload : payload};
  }

  showSlide = (payload) =>{
    return {type : SHOW_SLIDE, payload : payload};
  }

}
