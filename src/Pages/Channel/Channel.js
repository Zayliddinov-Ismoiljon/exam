
import ChannelMain from "../../Component/ChannelMain/ChannelMain";
import Header from "../../Component/Header/Header";
import SiteBar from "../../Component/SiteBar/SiteBar";
import "./channel.css"

const Channel=()=>{

    return(
        <>
            <Header/>
            <div className="channel-about">
            <SiteBar/>
            <ChannelMain/>
            </div>
        </>
    )
}

export default Channel;
