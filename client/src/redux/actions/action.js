import * as TYPES from "../types/types"


export const changeColorMain = (color)=>{
  return {
    type: TYPES.COLOR_MAIN,
    payload: color
  }
}
export const changeColorSecond = (color)=>{
    return {
      type: TYPES.COLOR_SECOND,
      payload: color
    }
  }