import React from 'react';

const PhoneButton = () => {
    return(
        <a href="tel:47774019" target="_blank" className={`flex justify-center lg:justify-left items-center gap-2 bg-mainColor lg:bg-transpBg hover:bg-transpBlackBg duration-200 lg:border-2 lg:border-white
         text-white py-4 pl-6 pr-8 rounded-[4px] lg:hidden`}>
            <span className="material-symbols-outlined">
                call
            </span>
            <p className="text-white font-[Inter]">Hacer mi pedido <span className='font-semibold'>por teléfono</span></p>
        </a>
    )
}

export default PhoneButton;