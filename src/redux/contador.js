import { create } from "zustand";

 const counter = create((set)=>({
  count : 10,
  title : "la pagina del benja ",
  increment : (value) =>{
    set(state=>({
      count: state.count + value 
    }))
  },
  decrement : (value)=>{
    set(state=>({
      count : state.count - value
    }))
  }
  
}))

export default counter