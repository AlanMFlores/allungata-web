import OnlineButton from "./subcomponents/OnlineButton.tsx";

const HeaderFixed = () => {
    return (
        <section className="static lg:sticky z-50 top-0 left-0 right-0 bg-mainColor">
            <div className={`max-w-[1600px] m-auto flex flex-col items-center lg:flex-row lg:justify-between px-4 py-6 lg:px-20 lg:py-6 gap-4`} id="header-fixed">
                <img src={'images/allungatalogo.png'} alt="logo de allungata" width="80" height="80" className="w-16 lg:w-20 lg:block"/>
                <div className="hidden lg:flex flex-col lg:flex-row gap-4">
                    <OnlineButton link={"https://g.waitry.net/@allungata"}/>
                </div>
            </div>        
        </section>
    )
}

export default HeaderFixed;
