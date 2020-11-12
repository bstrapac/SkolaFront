import React from 'react'
import Select from 'react-select';

const DropDown = (props) => {
    return(
        <fieldset className="form-group">
        <label>{ props.children }</label>
        <Select
          isSearchable = { true } 
          options = { props.data } 
          value = { props.data.value }
          onChange = { props.action }
        /> 
      </fieldset>
    )
}

export default DropDown