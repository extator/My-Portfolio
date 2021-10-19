import "./topbar.scss"

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="wrapper"> {/* all topbar component*/}
                <div className="left">{/*logo and discription*/}
                    <a href="#intro">LOGO HERE</a> {/*link to intro (start point in web) maping by id*/}
                </div>
                <div className="right">{/* hamburger menu*/}

                </div>
            </div>
        </div>
    )
}

export default Topbar
