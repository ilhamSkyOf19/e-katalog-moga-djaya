import { useRef, useEffect } from "react";

const useDraggableScroll = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let isMouseDown = false;
        let startX;
        let scrollLeft;

        const handleMouseDown = (e) => {
            isMouseDown = true;
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
            container.classList.add("cursor-grabbing");
        };

        const handleMouseLeaveOrUp = () => {
            isMouseDown = false;
            container.classList.remove("cursor-grabbing");
        };

        const handleMouseMove = (e) => {
            if (!isMouseDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 4;
            container.scrollLeft = scrollLeft - walk;
        };

        const handleWheel = (e) => {
            if (e.deltaY) {
                e.preventDefault();
                container.scrollLeft += e.deltaY * 4;
            }
        };

        container.addEventListener("mousedown", handleMouseDown);
        container.addEventListener("mouseleave", handleMouseLeaveOrUp);
        container.addEventListener("mouseup", handleMouseLeaveOrUp);
        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("wheel", handleWheel);

        return () => {
            container.removeEventListener("mousedown", handleMouseDown);
            container.removeEventListener("mouseleave", handleMouseLeaveOrUp);
            container.removeEventListener("mouseup", handleMouseLeaveOrUp);
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("wheel", handleWheel);
        };
    }, []);

    return containerRef;
};

export default useDraggableScroll;
