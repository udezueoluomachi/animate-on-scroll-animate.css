"use client";
import {useEffect} from "react";


const useAnimationOnScroll = (scrollRef, options) => {
    useEffect(() => {
        const scrollableElement = scrollRef ? scrollRef.current : null;
        if(!scrollableElement) 
            console.log("Using viewport as the root scroll element")

        const animationTriggers = document.querySelectorAll(".animate-onscroll-trigger")

        const startAnimatingChild = (child) => {
            const childAnimation = child.getAttribute("animation-settings")
            if(!childAnimation)
                return

            const animations = childAnimation.split(" ")
            child.classList.add(`animate__animated`, ...animations);

            function handleAnimationEnd(event) {
                if(options?.noRepeat) {
                  return
                }
                event.stopPropagation();
                child.classList.remove(`animate__animated`, ...animations);
            }

            child.addEventListener('animationend', handleAnimationEnd, {once: true});
        }

        const observerTask = (entries, observer) => {
            entries.forEach(entry => {
                const visibleCont = entry.target
                visibleCont.style.visibility = "hidden";
                if(entry.isIntersecting === true && entry.intersectionRatio > 0.4) {
                    visibleCont.style.visibility = "visible";
                    const childrenToAnimate = visibleCont.querySelectorAll(".animate__onscroll");

                    childrenToAnimate.forEach(child => startAnimatingChild(child))
                }
                else if(entry.isIntersecting === true && entry.intersectionRatio < 0.4 && options?.noRepeat != true) {
                    visibleCont.style.visibility = "hidden";
                }
            })
        }
        
        const observerOptions = {
            root: scrollableElement,
            rootMargin: "0px",
            threshold: [0.4, 0.25],
          };

        const observer = new IntersectionObserver(observerTask, observerOptions)

        animationTriggers.forEach(trigger => {
            observer.observe(trigger)
        })
    }, [])
}

export default useAnimationOnScroll;