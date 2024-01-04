import React, { useEffect } from 'react';
import { useState } from 'react';

interface TimeStateProps {
    isOpen: boolean;
}

const TimeState: React.FC<TimeStateProps> = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpeningSoon, setIsOpeningSoon] = useState(false);
    const [isClosingSoon, setIsClosingSoon] = useState(false);

    useEffect(() => {
        updateMessage();
        const interval = setInterval(updateMessage, 60000);

        return () => clearInterval(interval);
    }, []);

    const updateMessage = () => {
        const now = new Date();
        console.log(now)
        const currentHour = now.getHours();
        const currentMinutes = now.getMinutes();

        const open = 
            ((currentHour >= 11 && currentMinutes >= 0) && (currentHour <= 14 && currentMinutes <= 30)) ||
            ((currentHour >= 19 && currentMinutes >= 0) && (currentHour <= 22 && currentMinutes <= 30))

        const openingSoon = 
            ((currentHour === 10 && (currentMinutes >= 30 && currentMinutes <= 59))) ||
            ((currentHour === 18 && (currentMinutes >= 30 && currentMinutes <= 59 )))

        const closingSoon = 
            ((currentHour === 14 && (currentMinutes >= 0 && currentMinutes < 30))) ||
            ((currentHour === 22 && (currentMinutes > 0 && currentMinutes < 30)))

        setIsOpen(open);
        setIsOpeningSoon(openingSoon);
        setIsClosingSoon(closingSoon);

    }

    return (
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-[100px] mb-4">
            <div className={`grid place-content-center border-2 ${isOpeningSoon ? 'border-orange-600' : isClosingSoon ? 'border-yellow-600' : isOpen ? 'border-green-600' : 'border-red-700'} rounded-full w-[16px] h-[16px] p-1`}>
                <span className={`animate-ping block rounded-full ${isOpeningSoon ? 'bg-orange-600' : isClosingSoon ? 'bg-yellow-600' : isOpen ? 'bg-green-600' : 'bg-red-700'}  h-[6px] w-[6px]`}></span>
            </div>
            <p className={`text-sm font-bold font-[Inter] ${isOpeningSoon ? 'text-orange-600' : isClosingSoon ? 'text-yellow-600' : isOpen ? 'text-green-600' : 'text-red-700'}`}>
                { isOpeningSoon ? 'Abrimos en unos minutos' : isClosingSoon ? 'Cerramos en unos minutos' : isOpen ? 'Abierto' : 'Cerrado'}</p>
        </div>
    )
}

export default TimeState;