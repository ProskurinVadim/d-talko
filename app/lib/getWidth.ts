"use client"
import {useState, useEffect} from "react";

type value = string | number;

export const getWidth = (desktop: value , tablet: value, mobile: value): value => {
    const innerWidth = window.innerWidth;
    return innerWidth > 1024 ? desktop : innerWidth > 768 ? tablet : mobile;
}

const useResponsiveValue = (desktop: value, tablet: value, mobile: value): value => {
    const [value, setValue] = useState(() => {
        if (typeof window !== 'undefined') {
            return getWidth(desktop, tablet, mobile);
        }
        return desktop;
    });

    useEffect(() => {
        const handleResize = () => {
            setValue(getWidth(desktop, tablet, mobile));
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [desktop, tablet, mobile]);

    return value;
};

export default useResponsiveValue;