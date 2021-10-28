import { useEffect,useState } from "react"
import "./portfolio.scss"
import "./portfoliolist/PortfolioList"
import PortfolioList from "./portfoliolist/PortfolioList"
import {featuredPortfolio,webPortfolio,mobilePortfolio,designPortfolio} from "../../data"

const Portfolio = () => {

    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([])

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

    useEffect(() => {
        switch (selected){
            case "featured":
                setData(featuredPortfolio)
                break
            case "web":
                setData(webPortfolio)
                break
            case "mobile":
                setData(mobilePortfolio)
                break
            case "design":
                setData(designPortfolio)
                break
            default: setData(featuredPortfolio)
         }
    }, [selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1> {/* portfolio  */}
            <h2 className="gradientText">Custom CSS Test</h2>
            <h3>*For test only, not my works*</h3>
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
                {data.map((d)=>(
                    <div className="item" >
                    <img src={d.img} alt="demo pic" />
                    <h3>{d.title}</h3>
                </div>
                    ))}
            </div>
        </div>
    )
}

export default Portfolio
