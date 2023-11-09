import React from 'react'

const Footer = ({ length }) => {
  const today = new Date();
  return (
    <footer>
      <div>
          {/* <p>CopyRight &copy;</p>
          <h1>Today's Date : {today.getDate()} / {today.getMonth() + 1} / {today.getFullYear()}</h1> */}
          <p>{length} List {length === 1 ? "item" : "items"}</p>
      </div>

    </footer>
  )
}

export default Footer