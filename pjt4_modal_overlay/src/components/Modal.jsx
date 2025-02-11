// import React from 'react'

import PropTypes from "prop-types";

export default function Modal({handleOpenModal, accepted}) {
  return (
    <div className='modal_main'>
    <div className='modal_comp'>

        <button className='closeOffer' onClick={handleOpenModal}>❌</button>

        <h4>Great! You are now eligible for a 25% discount. Click on <b>Accept Offer</b> to apply.</h4>

        <button className='accept_offer' onClick={accepted}>Accept Offer</button>

    </div>
    </div>
  )
}


//PropTypes Validation
Modal.PropTypes = {
    handleOpenModal: PropTypes.func.isRequired, // Ensures handleOpenModal is a function and required
    accepted: PropTypes.func.isRequired // Ensures accepted is a function and required
};