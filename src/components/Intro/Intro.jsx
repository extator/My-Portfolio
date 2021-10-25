import "./intro.scss"

const Intro = () => {
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
                        <span>Designer</span>
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
