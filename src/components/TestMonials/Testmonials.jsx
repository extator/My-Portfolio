import "./testmonials.scss"

const Testmonial = () => {
    return (
        <div className="testmonials" id="testmonials">
            <h1>Testmonials</h1>
            <div className="container">
                <div className="card">
                    <div className="top">
                        <img src="assets/right.png" className="left" alt="" />
                        <img src="assets/cat1.jpg" className="userProfile" alt="" />
                        <img src="assets/instagram.png" className="appIcon" alt="" />
                    </div>
                    <div className="center">
                        Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow 
                        (Give me snack! Human!)
                    </div>
                    <div className="bottom">
                        <h3>brownsucar_ddang</h3>
                        <h4>Celeb cat on IG</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testmonial
