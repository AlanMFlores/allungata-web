import React from 'react';

interface LinkButton {
    link : string;
    py: string;
}

const DeliveryButton: React.FC<LinkButton>= ({link, py}) => {
    return(
        <a href={link} target="_blank" className={`flex justify-center lg:justify-left items-center gap-2 bg-transpBg hover:bg-transpBlackBg duration-200 border-2
        border-white text-white pl-6 pr-8 ${py} rounded-[4px]`}>
            <span className="material-symbols-outlined">
                motorcycle
            </span>
            <p className="text-white font-[Inter] font-semibold">Hacer mi pedido para delivery</p>
        </a>
    )
}

export default DeliveryButton;