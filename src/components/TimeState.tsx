import React, { useEffect } from 'react';
import { useState } from 'react';

interface MessageProps {
    isOpen: boolean;
}

const TimeState: React.FC= () => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        updateMessage();
        const interval = setInterval(updateMessage, 60000);

        return () => clearInterval(interval);
    }, []);

    const updateMessage = () => {
        const now = new Date();
        const currentHour = now.getHours();

        const firstOpenHourStart = 11;
        const firstOpenHourEnd = 15;
        const secondOpenHourStart = 19;
        const secondOpenHourEnd = 23;

        const isFirstOpen = currentHour >= firstOpenHourStart && currentHour < firstOpenHourEnd;
        const isSecondOpen = currentHour >= secondOpenHourStart && currentHour < secondOpenHourEnd;

        setIsOpen(isFirstOpen || isSecondOpen)
    }

    return (
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-transpBg rounded-[100px] mb-4">
            <div className={`grid place-content-center border-2 ${isOpen ? 'border-timeStateGreen' : 'border-timeStateRed'} rounded-full w-[16px] h-[16px] p-1`}>
                <span className={`animate-ping block rounded-full ${isOpen ? 'bg-timeStateGreen' : 'bg-timeStateRed'}  h-[6px] w-[6px]`}></span>
            </div>
            <p className="text-white text-sm font-semibold font-[Inter]">{isOpen ? 'Abierto' : 'Cerrado'}</p>
        </div>
    )
}

export default TimeState;