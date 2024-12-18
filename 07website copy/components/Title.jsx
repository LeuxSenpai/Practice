import React from 'react'
import './Title.css'

export const Title = ({Subtile,Title}) => {
  return (
    <div className='title'>
      <p>{Subtile}</p>
      <h2>{Title}</h2>
    </div>
  )
}
