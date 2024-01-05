import React from "react";
import OnlineButton from "./OnlineButton";
import PhoneButton from "./PhoneButton";

const OrderButtons = () => {
    return(
        <div className="bg-transpBlackBg p-4 sticky lg:static lg:hidden bottom-0 flex flex-col lg:flex-row gap-2">
                <OnlineButton link={"https://g.waitry.net/@allungata"}/>
                <PhoneButton/>
            </div>
    )
}

export default OrderButtons;