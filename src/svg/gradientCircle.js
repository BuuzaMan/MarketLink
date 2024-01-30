const GrCircle = () => {
    return (
        <div className="absolute desktop:w-[60px] desktop:h-[60px] mobile:w-[35px] mobile:h-[35px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="" height="" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="30" fill="url(#paint0_linear_135_18)"/>
                <defs>
                <linearGradient id="paint0_linear_135_18" x1="3.53933" y1="-13.125" x2="62.9568" y2="-10.6379" gradientUnits="userSpaceOnUse">
                <stop stop-color="#EB1988"/>
                <stop offset="1" stop-color="#005AF9"/>
                </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default GrCircle;