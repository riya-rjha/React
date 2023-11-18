import React from 'react'

const Missing = () => {
  return (
    <div style={{color: 'red'}}>

      <>
        <h2 style={{color: "red"}}>Sorry, post not found!</h2>
        <h2>
          <Link to='/'>Navigate to our home page</Link>
        </h2>
      </>

    </div>
  )
}

export default Missing