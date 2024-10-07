import React from 'react'


import '../assets/css/app.css'
const    Modal = ({addNewEl ,closeModal}) => {
  return (
    <div className='modal'  >
<div className='modal-body'>

    
    <h2>
        are you sure
    </h2>
    <button onClick={addNewEl}>yes</button>
    <button onClick={closeModal}>no</button>
    </div>

    </div>
  )
}

export default    Modal