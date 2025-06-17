import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const MailButton = ({openContactModal
}) => {
  return (
    <button
    onClick={() => openContactModal()}
    
    className='mail__btn'>
        <FontAwesomeIcon icon={faEnvelope} />
    </button>
  )
}

export default MailButton