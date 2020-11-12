import React from 'react'

const Add = ({action, children}) =>{
    return(
        <button 
          onClick={ action } 
          className= "btnAddNew"
        > 
        { children }
        </button>
      )
}

const Option = ({ action, children }) => {
  return(
    <button 
      onClick={ action } 
      className= "btnOption"
    > 
    { children }
    </button>
  )
}
const Submit = () =>{
  return (
    <button 
      className="btnAddNew" 
      type="submit"
    >
      Spremi
    </button>
  )
}

export {Add, Option, Submit}