

export const UPDATE_TITLE = 'UPDATE_TITLE';
export const CREATE_NEW_SLIDE = 'CREATE_NEW_SLIDE';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION';
export const SELECT_SLIDE = "SELECT_SLIDE";
export const DELETE_SLIDE = "DELETE_SLIDE";
export const SHOW_SLIDE = "SHOW_SLIDE";

//common method to construct payload
export const action =(type,payload)=>{
  return {
    type,
    payload
  }
}
