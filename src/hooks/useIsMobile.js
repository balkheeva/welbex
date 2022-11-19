import {useEffect, useState} from "react";

export default function useIsMobile() {
    const [isMobile, setIsMobile] = useState(window.screen.width < 480)

    useEffect(() => {
        const handler = () => {
            const newIsMobile = window.screen.width < 480
            if (newIsMobile !== isMobile) setIsMobile(newIsMobile)
        }
        window.addEventListener('resize', handler)
        return () => window.removeEventListener('resize', handler)
    }, [isMobile])

    return isMobile
}