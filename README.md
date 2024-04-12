# REACT ANIMATE ON SCROLL HOOK

```javascript
useAnimationOnScroll(scrollElem || null, {noRepeat : false})
```

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
    useAnimationOnScroll(scrollElem || null, {noRepeat : false})
    return (
        //add ref
        //specify the element which when it appears in the viewport triggers the animation
        //add animation-settings attributes to the elements to be animated.
        //Add animate__onscroll class to the classList of the element to be animated.
        <div ref={scrollElem}>
            <div className="animate-onscroll-trigger">
                <p animation-settings="animate__fadeInDown animate__slower" className="animate__onscroll" >
                    hello world
                </p>
            </div>
        </div>
    )
}
```

The value of the `animation-settings` attributes are to be the animate.css animaton classes except from and `animate__animated` class.

## Live Samples

S/N | Live link| Source code | Note
----|----------|---------|--
 1 | [My Portfolio's home page](https://dream-dev.vercel.app) | [here](https://github.com/udezueoluomachi/portfolio/blob/main/src/app/page.jsx) | This project originated from here. I wrote it initially while building my portfolio.

 ## Note

 I might not update this project in the future because of time. There are lot of features it could have. I am only publishing this because I do not want to keep on moving files just to use my code. I want to use via `npm install` instead. It is 3:23 am 4/11/2024. I need sleep. I have a project I am working on simultaneously. Happy coding. Made with 🫡. Bye for now. Please make a pull request.