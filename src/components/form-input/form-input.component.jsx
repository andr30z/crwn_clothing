import React from 'react'
import './form-input.styles.scss';
const FormInput = ({ handleChange, label, ...outrasProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...outrasProps} />
      {
        label ?
          (<label className={`${outrasProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>)
          : null
      }
    </div>
  )
}

export default FormInput;
