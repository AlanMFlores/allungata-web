import React from 'react'

const ScheduleModal = () => {
  return (
    <div className='absolute bg-white p-8 fill-stone-600 w-fit'>
        <p>Nuestro horario de atención es de lunes a sábado.</p>
        <p>Turno tarde: de <span className='font-semibold'>11 a 14:30hs.</span></p>
        <p>Turno noche: de <span className='font-semibold'>19 a 22:30hs.</span></p>
    </div>
  )
}

export default ScheduleModal