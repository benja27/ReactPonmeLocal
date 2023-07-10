import { create } from "zustand";

 const storage = create((set)=>({   
  results : [],
  selected : [],  
  saveResults : (value) =>{
    set( state=>({
      results : value
    }))
  },
  setSelected : (value) =>{
    set( state=>({
      selected: value
    }) )
  } 
  
}))

export default storage