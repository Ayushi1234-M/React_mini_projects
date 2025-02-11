import { useState } from 'react'
import Modal from './Modal';
import Acceptscreen from './Acceptscreen';

export default function Showoffer() {

    const[isShowOffer, setShowOffer]=useState(false);

    function handleOpenModal()
    {
        setShowOffer(!isShowOffer);
    }

    const[isAccept, setIsAccepted]=useState(false);

    function accepted()
    {
        setIsAccepted(true);
    }

  return (
    <div className={isShowOffer? 'new' : 'orignal'}>

        {
            !isShowOffer
            &&
            <button className='showoffer' onClick={handleOpenModal}>Show Offer</button>

        }

        {
            isShowOffer && !isAccept
            &&
            <Modal handleOpenModal={handleOpenModal} accepted={accepted}></Modal>
        }

        {
            isAccept
            &&
            <Acceptscreen/>
        }
      
    </div>
  )
}
