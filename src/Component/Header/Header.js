import { SiteLogo, VideoCall, Shape, Notification } from "../Icon/Icon";
import UserPic from "../../Assets/Images/userpic.png"
import "./header.css";

const Header=()=>{
    return(
        <header className="header">
            <div className="header__info">
                <button className="header__button" type="button">
                    <span className="header__span"></span>
                    <span className="header__span"></span>
                    <span className="header__span"></span>
                </button>
                <SiteLogo/>
                <input className="header__input" type="search" placeholder="search"/>
            </div>
            <div className="header__about">
                <VideoCall/>
                <Shape/>
                <Notification/>
                <img src={UserPic} alt="user picture" />
            </div>
        </header>
    )
}

export default Header;