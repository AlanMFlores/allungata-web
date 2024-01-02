import { useState, useEffect } from 'react';
import DeliveryButton from "./subcomponents/DeliveryButton.tsx";
import WithdrawButton from "./subcomponents/WithdrawButton.tsx";

const HeaderFixed = () => {
    // const [isSticky, setIsSticky] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const headerFixed = document.getElementById("header-fixed");
    //         const heightPos = headerFixed.getBoundingClientRect().y;

    //         if(window.scrollY > heightPos ) {
    //             setIsSticky(true);
    //         }

    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     // return () => {
    //     //     window.removeEventListener('scroll', handleScroll);
    //     // }
    // }, [])

    return (
        <section className={`sticky top-0 left-0 right-0 bg-mainColor flex flex-col items-center lg:flex-row lg:justify-between px-4 py-6 lg:px-20 lg:py-6 gap-4`} id="header-fixed">
            <img src={'icons/allungata-logo.svg'} alt="logo de allungata" width="60" height="60" className="hidden lg:block"/>
            <div className="flex flex-col lg:flex-row gap-4">
                <WithdrawButton link={"https://g.waitry.net/order/3301/allungata/take-away"}/>
                <DeliveryButton link={"https://g.waitry.net/order/3301/allungata/delivery"}/>
            </div>
        </section>        
    )
}

export default HeaderFixed;
