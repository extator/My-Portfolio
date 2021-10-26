import { useState } from "react"
import "./portfolio.scss"
import "./portfoliolist/PortfolioList"
import PortfolioList from "./portfoliolist/PortfolioList"

const Portfolio = () => {

    const [selected, setSelected] = useState("featured")

    const list =[
        {
            id:"featured",
            title:"Feature",
        },
        {
            id:"web",
            title:"Web App",
        },
        {
            id:"mobile",
            title:"Mobile App",
        },
        {
            id:"design",
            title:"UI Design",
        },
    ]

    return (
        <div className="portfolio" id="portfolio">
            <h1>Topic Header</h1> {/* portfolio  */}
            <h2 className="gradientText">Custom CSS Test</h2>
            <ul>
                {list.map((item)=>(
                    <PortfolioList 
                    id={item.id}
                    title={item.title}
                    active={selected === item.id} 
                    setSelected={setSelected}
                    />
                ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://miro.medium.com/max/2600/1*P8zWsDncG4qLcc8ZsnovOA.png" alt="demo pic" />
                    <h3>App Names</h3>
                </div>
                <div className="item">
                    <img src="https://miro.medium.com/max/2600/1*P8zWsDncG4qLcc8ZsnovOA.png" alt="demo pic" />
                    <h3>App Names</h3>
                </div>
                <div className="item">
                    <img src="https://miro.medium.com/max/2600/1*P8zWsDncG4qLcc8ZsnovOA.png" alt="demo pic" />
                    <h3>App Names</h3>
                </div>
                <div className="item">
                    <img src="https://miro.medium.com/max/2600/1*P8zWsDncG4qLcc8ZsnovOA.png" alt="demo pic" />
                    <h3>App Names</h3>
                </div>
                <div className="item">
                    <img src="https://miro.medium.com/max/2600/1*P8zWsDncG4qLcc8ZsnovOA.png" alt="demo pic" />
                    <h3>App Names</h3>
                </div>
                <div className="item">
                    <img src="https://miro.medium.com/max/2600/1*P8zWsDncG4qLcc8ZsnovOA.png" alt="demo pic" />
                    <h3>App Names</h3>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
