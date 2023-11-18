import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        //useEffect provides cleanUp functions as well
        const cleanUp = () =>{
            console.log('Runs if a use effect dependency changes');
            window.removeEventListener('resize', handleResize);
        }

        return cleanUp;

    }, [])
    
    return windowSize;
}

export default useWindowSize;