import {useState, useEffect} from 'react'

export default function useSidebar() {
    const [sidebarState, setSidebarState] = useState("");
    const desktopWidth = 1024;
    var lastX = window.innerWidth;

    const toggleSidebar = () => {
        console.log(sidebarState)
        if (sidebarState === "") {
            const top = window.scrollY
            console.log(top)
            setSidebarState('open');
            window.scrollTo(0, top);
            return;
        }
        setSidebarState('');
    }
    
    const handleResize = () => {
        var x = window.innerWidth;
        if (lastX <= desktopWidth & desktopWidth < x) {
            setSidebarState('');
        }
        lastX = x;
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    });

    return {handleResize, toggleSidebar, sidebarState, setSidebarState}
}
