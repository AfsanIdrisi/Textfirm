import React from 'react'
export default function Alert(props) {
    return (
      <div className={props.type}>
        <h2>{props.message}</h2>
      </div>
    )
  }