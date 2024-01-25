import {
  GET_DOCTERS_FAILURE,
  GET_DOCTERS_SUCCESS,
  GET_DOCTERS_REQUEST,
  POST_DOCTER_REQUEST,
  POST_DOCTER_SUCCESS,
  POST_DOCTER_FAILURE,
  PUT_DOCTER_FAILURE,
  PUT_DOCTER_REQUEST,
  PUT_DOCTER_SUCCESS,
  DELETE_DOCTER_FAILURE,
  DELETE_DOCTER_REQUEST,
  DELETE_DOCTER_SUCCESS
} from "./actionTypes";

// Initial State
const initialState = {
  Docters: [],
  loading: false,
  error: null,
  message: "",
  success: false, // Add a success field to track success state
};

// Reducer
export const docterReducer = (state = initialState, { type, payload, message }) => {

  switch (type) {
    case GET_DOCTERS_REQUEST:
      return { ...state, loading: true }
      break;

    case GET_DOCTERS_SUCCESS:
      return { ...state, loading: false, success: true, Docters: payload, error: null }
      break;
    case GET_DOCTERS_FAILURE:
      return { ...state, loading: false, error: message }
      break;
    case POST_DOCTER_REQUEST:
      return { ...state, loading: true }
      break;
    case POST_DOCTER_SUCCESS:
      return { ...state, loading: false, message: message, success: true, error: null }
      break;
    case POST_DOCTER_FAILURE:
      return { ...state, loading: false, error: message, success: false }
      break;
      case PUT_DOCTER_REQUEST:
        return { ...state, loading: true }
        break;
      case PUT_DOCTER_SUCCESS:
        return { ...state, loading: false, message: message, success: true, error: null }
        break;
      case PUT_DOCTER_FAILURE:
        return { ...state, loading: false, error: message, success: false }
        break;
        case DELETE_DOCTER_REQUEST:
          return { ...state, loading: true }
          break;
        case DELETE_DOCTER_SUCCESS:
          return { ...state, loading: false, message: message, success: true, error: null }
          break;
        case DELETE_DOCTER_FAILURE:
          return { ...state, loading: false, error: message, success: false }
          break;   


    default:
      return state
      break;
  }
};
