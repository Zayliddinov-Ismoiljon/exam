import Nora from "../../Assets/Images/nora.png";
import Notification from "../../Assets/Images/notification.svg";
import Marget from "../../Assets/Images/marget.png";
import flora from "../../Assets/Images/flora.png";
import violet from "../../Assets/Images/violet.png";
import filip from "../../Assets/Images/filip.png";
import Left from "../../Assets/Images/Left.png";
import Right from "../../Assets/Images/Right.png";

import "./channelmain.css";
import ChannelFooterItem from "../ChannelFooterItem/ChannelFooterItem";
import { useEffect, useState } from "react";


const ChannelMain=()=>{

    const [channel, setChannel]=useState([])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then(response=>response.json())
        .then(data=>setChannel(data))
    },[])

    console.log(channel);


    return(
        <div className="channel">
            <section className="channel__header">

            </section>
            <div className="channel__about">
                <div className="channel__imgcon">
                    <img className="channel__aboutimg" src={Nora} alt="channel img" />
                    <h3 className="channel__abouttitle">Margaret Phelps</h3>
                </div>
                <div className="channel__aboutbtn">
                    <img  src={Notification} alt="notification image" />
                    <button className="channel__aboutbutton" type="button">
                        Subscribe 2.3m
                    </button>
                </div>
            </div>
            <div className="channel-menu__choos">
                <div className="channel-menu__choosabout">
                    <ul className="channel-menu">
                    <li className="channel-menu__item">
                        <a href="#" className="channel-menu__link">Home</a>
                    </li>
                    <li className="channel-menu__item">
                        <a href="#" className="channel-menu__link">Videos</a>
                    </li>
                    <li className="channel-menu__item">
                        <a href="#" className="channel-menu__link">Playlists</a>
                    </li>
                    <li className="channel-menu__item">
                        <a href="#" className="channel-menu__link">Channels</a>
                    </li>
                    <li className="channel-menu__item">
                        <a href="#" className="channel-menu__link">Discussion</a>
                    </li>
                    <li className="channel-menu__item">
                        <a href="#" className="channel-menu__link">About</a>
                    </li>
                    </ul>
                    <div className="channel-menu__choosinfo">
                        <img className="channel-pic" src={Marget} alt="channel image" />
                        <div className="channel-menu__choosinfotext">
                            <h3 className="channel-menu__choosinfotitle">
                            Choosing The Best Audio Player Software For Your Computer
                            </h3>
                            <p className="channel-menu__choostext">
                            Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. 
                            </p>
                            <span className="channel-menu__choosspan">
                            11k views  ·  6 months ago
                            </span>
                        </div>
                    </div>
                </div>
                <div className="channel-cinema__menu">
                    <h3 className="channel-cinema__title">Recommended channel</h3>
                    <ul className="channel-cinema__list">
                        <li className="channel-cinema__item">
                            <img src={flora} alt="channel recomendation image" className="channel-cinema__img" />
                            <span className="channel-cinema__span">Flora Benson</span>
                        </li>
                        <li className="channel-cinema__item">
                            <img src={violet} alt="channel recomendation image" className="channel-cinema__img" />
                            <span className="channel-cinema__span">Violet Cobb</span>
                        </li>
                        <li className="channel-cinema__item">
                            <img src={filip} alt="channel recomendation image" className="channel-cinema__img" />
                            <span className="channel-cinema__span">Phillip Mullins</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="channel-footer">
                <div className="channel-footer__info">
                    <h3 className="channel-footertitle">Margaret Phelps videos</h3>
                    <div className="dolice-btn">
                        <button className="dolice__btn1">
                            <img src={Left} alt="left btn" />
                        </button>
                        <button className="dolice__btn2">
                            <img src={Right} alt="left btn" />
                        </button>
                    </div>
                </div>
                <ul style={{width:"1630px", overflowX:"scroll"}} className="channel-footerlist">
                    {
                        channel.splice(0,20).map(item=><ChannelFooterItem obj={item}/>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default ChannelMain;