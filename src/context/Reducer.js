import React from 'react'

export const Reducer = (state, action) => {
    switch (action.type) {
        case "branch":
            return {
                ...state,
                branch:action.check?[...state.branch,action.value]:state.branch.length>0?state.branch.filter((c)=>c!=action.value):[]
  
            }
            case "Designation":
                return{
                    ...state,
                    Designation:action.check?[...state.Designation,action.value]:state.Designation.length>0?state.Designation.filter((c)=>c!=action.value):[]
  
                }
                default :
                return state
    }
}