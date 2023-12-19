import React from 'react'

const Next = (props) => {
    const { className, style, onClick } = props;
  return (
    <div className={className}
    style={{ ...style,  background: "orange", borderRadius:'50%', justifyContent:'center', alignItems:'center' , padding:'4px' }}
    onClick={onClick}
  >
      
    </div>
  )
}

export default Next
