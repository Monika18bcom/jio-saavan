import React from 'react'

function FormButton({style}) {
  return (
    <div className='form-button' style={{backgroundColor: style.bg , color: style.color, textAlign: style.textAlign, height: style.height , width: style.width, borderRadius: style.borderRadius, padding:style.padding}}>{style.content}</div>
  )
}

export default FormButton