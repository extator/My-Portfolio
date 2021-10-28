import { useState } from "react";
import "./works.scss"
import {sliderData} from"../../data"

const Works = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const data = sliderData

      const handleClick = (way) => {
        way === "left"
          ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
          : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
      }
    return (
        <div className="works" id="works" >
            <div className="slider"  style={{transform:`translate(-${currentSlide * 100}vw)`}}>
                {data.map((d)=>( //all slider has been loaded but you can see only one because 1 slide use 100vw (100% of display area)
                    <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="icon" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                    {d.desc}
                                </p>
                                <span>
                                    Projects
                                </span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="images" />
                        </div>
                    </div>
                </div>
                    ))}
            </div>
            <img src="assets/down-arrow.png" alt="left arrow" className="arrow left" onClick={()=>handleClick('left')} />
            <img src="assets/down-arrow.png" alt="right arrow" className="arrow right" onClick={()=>handleClick()}/>
        </div>
    )
}

export default Works
