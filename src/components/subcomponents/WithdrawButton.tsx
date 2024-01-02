import React from 'react';

interface LinkButton {
    link : string;
}

const WithdrawButton: React.FC<LinkButton>= ({link}) => {
    return(
        <a href={link} target="_blank" className={`flex justify-center lg:lg:justify-left items-center gap-2 bg-white hover:bg-transpBlackBg duration-200 pl-6 pr-8 py-4 rounded-[4px] text-mainColor hover:text-white`}>
            <span className="material-symbols-outlined">
                directions_walk
            </span>
            <p className="font-[Inter] font-semibold">Pedir para retirar</p>
        </a>
    )
}

export default WithdrawButton;