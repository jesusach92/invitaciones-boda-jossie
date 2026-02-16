
import { useState } from 'react';
import '../styles/styles.css';

import ConfirmationModal from './common/ConfirmationModal';
import { useGuestHook } from './hooks/useGuestHook';


const FormRSVP = (family) => {

  if (!family.message) {
    return (<section className="confirmation font-indie-flower">
      <p>Código no válido o invitación no encontrada</p>
    </section>
    )
  }
  return (
    <section className="form-rsvp">
      <div className="form-container">

      </div>
    </section>
  )
}

const Confirmation = () => {
  const family = useGuestHook();






  return (
    <section className="confirmation-with-message font-indie-flower" >
      <div className="confirmation-container">
        <div>
          <img src="/assets/Confirmation/title.png" alt="" />
        </div>
        <div>
          <FormRSVP family={family} />
        </div>
        <div>
        </div>
      </div >
      <img src="/assets/Confirmation/decor.png" alt="" />
    </section >
  )
}

export default Confirmation