import React from 'react';

interface LinkButton {
    link : string;
    py: string;
}

const WithdrawButton: React.FC<LinkButton>= ({link, py}) => {
    return(
        <a href={link} target="_blank" className={`flex justify-center lg:lg:justify-left items-center gap-2 bg-white hover:bg-transpBlackBg duration-200 pl-6 pr-8 ${py} rounded-[4px] text-mainColor hover:text-white`}>
            <span className="material-symbols-outlined">
                directions_walk
            </span>
            <p className="font-[Inter]">Hacer mi pedido <span className='font-semibold'>para retirar</span></p>
        </a>
    )
}

export default WithdrawButton;