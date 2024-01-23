//   action for get request
import {
  GET_DOCTERS_FAILURE,
  GET_DOCTERS_SUCCESS,
  GET_DOCTERS_REQUEST,
  POST_DOCTER_REQUEST,
  POST_DOCTER_SUCCESS,
  POST_DOCTER_FAILURE,
} from "./actionTypes";
import axios from "axios";

export const getDocterRequest = () => {
  return {type:GET_DOCTERS_REQUEST}
 
};

export const getDocterSuccess = (payload) => {
  return {type:GET_DOCTERS_SUCCESS,payload:payload}
 
};

export const getDocterFailure = () => {
 return {type:GET_DOCTERS_FAILURE}
};

// method to get data from an api
export const getDataDocters = async (dispatch,token) =>  {
  try {
    dispatch(getDocterRequest())
    
  let res=await axios.get(`https://masai-hospital-app-9i9a.onrender.com/user/appointments`)
  console.log(res)
  if(res.status==200){
    dispatch(getDocterSuccess(res.data))
  }else{
    dispatch(getDocterFailure(res.data.message))
  }
  
  } catch (error) {
    console.log(error)
    dispatch(getDocterFailure())
  }
};

//  POST REQUEST

export const postDocterRequest = () => {
  return {type:POST_DOCTER_REQUEST}
}
 

export const postDocterSuccess = (payload) => {
 return {type:POST_DOCTER_SUCCESS,payload:payload}
};

export const postDocterFailure = (message) => {
  return {type:POST_DOCTER_FAILURE,message}
};

// method for post DOCTER

export const postDocter =async (dispatch,newDocter,token) => {
  try {
    dispatch(postDocterRequest())
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    let res=await axios.post(`https://DOCTERS-library-management-app.onrender.com/user/DOCTER`,newDocter,config)
    console.log(res)
    if(res.status==201){
      getDataDocters(dispatch,token)
      return true
      
    }else{
      dispatch(postDocterFailure(res.data.message))
    }
   
  } catch (error) {
    console.log(error)
    dispatch(postDocterFailure())
  }

}
