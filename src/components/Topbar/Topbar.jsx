import "./topbar.scss"
import EmailIcon from '@mui/icons-material/Email';

const Topbar = () => {
    return (
        <div className="topbar active">
            <div className="wrapper"> {/* all topbar component*/}
                <div className="left">{/*logo and discription*/}
                    <a href="#intro" className="logo"> {/*Logo/link to intro (start point in web) maping by id*/}
                        <img src="catIcon2.ico" width="30px" height="30px"/>
                        N2MEET/U
                        </a> 
                <div className="itemcontainer"> {/* some info */}
                    <EmailIcon className="icon"/>
                    <span>mongkol.narkkong@gmail.com</span>
                </div>
                </div>
                <div className="right">{/* hamburger menu*/}
                    <div className="hamburger">
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
