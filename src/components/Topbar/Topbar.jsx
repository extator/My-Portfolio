import "./topbar.scss"
import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';

const Topbar = () => {
    return (
        <div className="topbar" id="topbar">
            <div className="wrapper"> {/* all topbar component*/}
                <div className="left">{/*logo and discription*/}
                    <a href="#intro" className="logo">
                        <img src="catIcon2.ico" width="30px" height="30px"/>
                        N2MEET/U
                        </a> {/*Logo/link to intro (start point in web) maping by id*/}
                {/* <div className="itemContainer"> */}
                    {/* <EmailIcon/> */}
                {/* </div> */}
                </div>
                <div className="right">{/* hamburger menu*/}
                    <MenuIcon/>
                </div>
            </div>
        </div>
    )
}

export default Topbar
