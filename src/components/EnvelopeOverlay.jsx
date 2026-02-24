import { useEffect } from "react";
import "../styles/styles.css";
import { useGuestHook } from "./hooks/useGuestHook";
import { useInViewAnimation } from "./hooks/useInViewAnimation";

export default function EnvelopeOverlay({ onStartMusic, opened, setOpened }) {
    const animation1 = useInViewAnimation({ order: 1, stepDelay: 600 }, true);
    const animation2 = useInViewAnimation({ order: 2, stepDelay: 400 }, true);
    const animation3 = useInViewAnimation({ order: 3, stepDelay: 300 }, true);
    const animation4 = useInViewAnimation({ order: 4, stepDelay: 300 }, true);

    const family = useGuestHook();

    useEffect(() => {
        if (!opened) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [opened]);

    const handleOpen = () => {
        setOpened(true);
        onStartMusic();
    };

    return (
        <div
            className={`envelope-overlay ${opened ? "opened" : ""}`}
            onClick={handleOpen}
        >
            <div className="envelope-container">
                <p ref={animation1.ref} className={`opacity-0 ${animation1.isVisible ? 'animate-appers' : ''} font-vladimir font-lg family-name`}>
                    {family ? `${family.family}` : "Perez Herrera Family"}
                </p>
                <img ref={animation2.ref} src="/assets/Envelope/postcard.png" alt="" className={`opacity-0 ${animation2.isVisible ? 'animate-appers' : ''} postcard clickeable`} />
                <div className="text-container">
                    <img ref={animation3.ref} src="/assets/Envelope/title-envelope.png" alt="" className={`opacity-0 ${animation3.isVisible ? 'animate-appers' : ''} text-envelope`} />
                    <img ref={animation4.ref} src="/assets/Envelope/subtitle-envelope.png" alt="" className={`opacity-0 ${animation4.isVisible ? 'animate-appers' : ''} text-envelope`} />

                </div>
            </div>

        </div>
    );
}
