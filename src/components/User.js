import React from 'react'

function User(props) {
  return (
    <div className='user-card'>
        <h1>Name: {props.name}</h1>
    </div>
  )
}

export default User