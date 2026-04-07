import { useInViewAnimation } from "../hooks/useInViewAnimation";

const Animated = ({ children, animation = "slide-up", delay = "0s", canAnimate = true }) => {
    const { ref, isVisible } = useInViewAnimation({}, canAnimate);

    return (
        <div
            ref={ref}
            style={{ animationDelay: delay }}
            className={`transition-all duration-700 ${isVisible ? `animate-${animation} opacity-100` : "opacity-0"
                }`}
        >
            {children}
        </div>
    );
}

export default Animated