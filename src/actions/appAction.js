import axios from "axios";
import bvalid from "bvalid/lib/bvalid.es";
import {constant} from "../helper/constant";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const startLoaderIn = (dispatch)=>{
  return dispatch({ type: "START_LOADER" });
}

const stopLoaderIn = (dispatch)=>{
  return dispatch({ type: "STOP_LOADER" });
}

export const startLoader = () => dispatch => {
  return dispatch({ type: "START_LOADER" });
}
  
export const stopLoader = () => dispatch => {
  return dispatch({ type: "STOP_LOADER" });
}