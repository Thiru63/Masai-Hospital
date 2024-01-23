import {
  GET_DOCTERS_FAILURE,
  GET_DOCTERS_SUCCESS,
  GET_DOCTERS_REQUEST,
  POST_DOCTER_REQUEST,
  POST_DOCTER_SUCCESS,
  POST_DOCTER_FAILURE,
} from "./actionTypes";

// Initial State
const initialState = {
  DOCTERs: [],
  loading: false,
  error: null,
  success: false, // Add a success field to track success state
};

// Reducer
export const docterReducer = (state=initialState,{type,payload,message}) => {

  switch (type) {
    case GET_DOCTERS_REQUEST:
      return {...state,loading:true}
      break;

      case GET_DOCTERS_SUCCESS:
      return {...state,loading:false,success:true,DOCTERs:payload,error:null}
      break;
      case GET_DOCTERS_FAILURE:
      return {...state,loading:false,error:message}
      break;
      case POST_DOCTER_REQUEST:
      return {...state,loading:true}
      break;
      case POST_DOCTER_SUCCESS:
      return {...state,loading:false,success:true,DOCTERs:[...state.DOCTERs,payload],error:null}
      break;
      case POST_DOCTER_FAILURE:
      return {...state,loading:false,error:message}
      break;
  
    default:
      return state
      break;
  }
};
