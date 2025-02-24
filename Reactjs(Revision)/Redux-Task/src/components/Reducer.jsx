import { TOGGLE_THEME } from "./Constant";

const initalstate ={
  darkMode:false
};

const themeReducer =(state=initalstate , action)=>{
  switch(action.type){
    case TOGGLE_THEME:
      return{
        ...state, darkMode: !state.darkMode
      }

      default:
        return state;
  }
}


export default themeReducer