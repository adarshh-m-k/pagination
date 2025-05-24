import React, { useState } from 'react'
import './TrailFrontpage.css'

function TrailFrontPage() {

  const [popup, setPopup] = useState(false)
  const [isClosing,setIsClosing] = useState(false)

  const open = () => {
    setPopup(true)
    setIsClosing(false)

  }

  const close = () => {

    setIsClosing(true)
    setTimeout(() => {
      setPopup(false)
    }, 300);
  }
  return (
    <div>
      <div>
        <input type="text" placeholder='Name' />
        <input type="text" placeholder='Name' />
        <input type="text" placeholder='Name' />
        <input type="text" placeholder='Name' />
      </div>
      <button onClick={open}>Submit</button>
      {
        popup && (
          <div className={`modal-overlay ${isClosing ? 'fade-out' :'fade-in'}`}>
            <div className={`modal ${isClosing ? 'scale-out' : 'scale-in'}`}>
            <span style={{width:'29px'}} className="close-icon" onClick={close}>&times;</span>
              <p>This is a popup message!</p>
             
            </div>
          </div>
        )
      }
    </div>
  )
}

export default TrailFrontPage