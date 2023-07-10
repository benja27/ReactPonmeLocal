import { create } from "zustand";

 const storage = create((set)=>({   
  results : [],
  selected : [],
  user: [],  
  saveResults : (value) =>{
    set( state=>({
      results : value
    }))
  },
  setSelected : (value) =>{
    set( state=>({
      selected: value
    }) )
  },
  setUser : (value) => {
    set(state =>({
      user : value
    }))
  } 
  
}))

export default storage