import { Navbar, FirstSection, SecondSection, ThirdSection } from "../components";
import { useRef, useEffect, useState } from 'react';


export default function LandingPage() {
    const navbarRef = useRef(null);
    const section2Ref = useRef(null);
    const [navbarHeight, setNavbarHeight] = useState(0);

    useEffect(() => {
        if (navbarRef.current) {
            setNavbarHeight(navbarRef.current.offsetHeight);
        }
    }, []);

    const scrollToSection = () => {
        if (section2Ref.current) {
            window.scrollTo({
                top: section2Ref.current.offsetTop - navbarHeight,
                behavior: 'smooth',
            });
        }
    };
    


    return (
        <div>
            <Navbar ref={navbarRef} />
            <main>
                <FirstSection scrollToSection={scrollToSection} ref={section2Ref} />
                <SecondSection />
                
            </main>
        </div>
    );
}
