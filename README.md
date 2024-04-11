# REACT ANIMATE ON SCROLL HOOK

`useAnimationOnScroll(scrollRef)`

## How to use

1. Install packages
```bash
npm install react-animate-on-scroll-animate.css animate.css --save
```
2. Import the hook to the file you want to use animations in and also impport animate.css

```javascript
import "animate.css"
import useAnimationOnScroll from "react-animate-on-scroll-animate.css"
```

3. Start using in your animation

```javascript
import "animate.css"
import useAnimationOnScroll from "react-animate-on-scroll-animate.css"
import {useRef} from "react";

//vertically scrollable component whose children should be animated.
export default function Component() {
    const scrollElem = useRef(null)
    return (
        //add ref
        //specify the element which when it appears in the viewport triggers the animation
        //add animation-settings attributes to the elements to be animated.
        <div ref={scrollElem}>
            <div className="animate-onscroll-trigger">
                <p animation-settings="animate__fadeInDown animate__slower">
                    hello world
                </p>
            </div>
        </div>
    )
}
```

The value of the `animation-settings` attributes are to be the animate.css animaton classes except from `animate__animate` and `animate__animated` classes