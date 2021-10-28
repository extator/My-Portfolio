import "./testmonials.scss"
import { testmonialsData } from "../../data"

const Testmonial = () => {

    const cardData = testmonialsData

    return (
        <div className="testmonials" id="testmonials">
            <h1>Testmonials</h1>
            <div className="container">
                {cardData.map((d)=>(
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src="assets/right.png" className="left" alt="" />
                        <img src={d.img} className="userProfile" alt="" />
                        <a href={d.link}>
                        <img src={d.icon} className="appIcon" alt="" />
                        </a>
                    </div>
                    <div className="center">
                        {d.desc}
                    </div>
                    <div className="bottom">
                        <a href={d.link}>
                        <h3>{d.name}</h3>
                        </a>
                        <h4>{d.title}</h4>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Testmonial
