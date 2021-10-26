import "./intro.scss"
import {init} from 'ityped'
import { useEffect, useRef} from "react"

const Intro = () => {

    const textRef = useRef()

    useEffect(()=>{
        init(textRef.current,{
            showCursor:true,
            strings:["Developer","Designer","Gamer","Archer","Cher's Cat"]
        })
    },[])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/catroll.png" alt="profilePic" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Your Name</h1>
                    <h3>Sleepless Fatty 
                        <span ref={textRef}></span>
                    </h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down-arrow.png" alt="down arrow" />
                </a>
            </div>
        </div>
    )
}
 
export default Intro
