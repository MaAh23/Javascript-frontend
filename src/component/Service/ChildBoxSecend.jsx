import React from 'react'

const ChildBoxSecend = ({title, description}) => {
  return (
    <div className="child-box secend">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="i-positin">
            <i className="fa-solid fa-arrow-right"></i>
        </div>
    </div>
  )
}

export default ChildBoxSecend