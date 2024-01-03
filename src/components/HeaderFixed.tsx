import { useState, useEffect } from 'react';
import DeliveryButton from "./subcomponents/DeliveryButton.tsx";
import WithdrawButton from "./subcomponents/WithdrawButton.tsx";

const HeaderFixed = () => {
    return (
        <section className={`sticky z-50 top-0 left-0 right-0 bg-mainColor flex flex-col items-center lg:flex-row lg:justify-between px-4 py-6 lg:px-20 lg:py-6 gap-4`} id="header-fixed">
            <img src={'icons/allungata-logo.png'} alt="logo de allungata" width="80" height="80" className="w-12 lg:w-20 lg:block"/>
            <div className="flex flex-col lg:flex-row gap-4">
                <WithdrawButton py={"py-2"} link={"https://g.waitry.net/order/3301/allungata/take-away"}/>
                <DeliveryButton py={"py-2"} link={"https://g.waitry.net/order/3301/allungata/delivery"}/>
            </div>
        </section>        
    )
}

export default HeaderFixed;
