import React from 'react';

interface LinkButton {
    link : string;
}

const OnlineButton: React.FC<LinkButton>= ({link}) => {
    return(
        <a href={link} target="_blank" className={`flex justify-center lg:lg:justify-left items-center gap-2 bg-white hover:bg-transpBlackBg duration-200 pl-6 pr-8 py-4 rounded-[4px] text-mainColor hover:text-white`}>
            <span className="material-symbols-outlined">
                shopping_cart
            </span>
            <p className="font-[Inter]">Hacer mi pedido <span className='font-semibold'>online</span></p>
        </a>
    )
}

export default OnlineButton;