import {UPDATE_USER,action} from '../actions/Actions.js';
import { isNull } from 'util';


const initialState ={
  contact: {'firstName':"Sonu"}
};

export default function ContactReducer(state=initialState,action){

  switch (action.type) {
    case UPDATE_USER:
      return{
        ...state,
        contact : action.payload
      }
    default:
      return state;
  }
}
