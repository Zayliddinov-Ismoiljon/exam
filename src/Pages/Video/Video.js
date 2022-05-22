import Header from "../../Component/Header/Header";
import egg from "../../Assets/Images/egg.png";
import foodLogo from "../../Assets/Images/foodlogo.png";
import "./video.css"
import VideoItem from "../../Component/VideoItem/VideoItem";
import { useState, useEffect } from "react";

const Video=()=>{

    const [video, setVideo]=useState([])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then(response=>response.json())
        .then(data=> setVideo(data))
    })


    return(
        <>
            <Header/>
            <div className="video">
                <div className="video-about">
                    <img className="video-about-img" src={egg} alt="video img" />
                    <h2 className="video-about__title">Dude You Re Getting A Telescope</h2>
                    <div className="video-info">
                        <span className="video-info__span">123k views</span>
                        <div className="video-info__btngroup">
                            <button className="video-info__btn">123k</button>
                            <button className="video-info__btn">123k</button>
                            <button className="video-info__btn">123k</button>
                            <button className="video-info__btn">123k</button>
                        </div>
                    </div>
                    <div className="video-fooddrink">
                        <img className="video-foodimg" src={foodLogo} alt="food drink image" />
                        <div className="video-foodrinktext">
                            <h3 className="video-fooddrinktitle">Food & Drink</h3>
                            <span className="video-fooddrinkspan">Published on 14 Jun 2019</span>
                            <p className="video-foodtext">
                            A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your 
                            </p>
                            <span className="video-foodspan">Show more</span>
                        </div>
                        <div className="video-fooddiv">
                        <button className="video-foodbutton">Subscribe 2.3m</button>
                        </div>
                    </div>
                </div>
                <div className="video-menu">
                    <h2 className="video-title">Next</h2>
                    <ul style={{width:"100vh", overflowY:"scroll", height:"700px"}} className="video-menu__list">
                        {
                            video.splice(0,20).map(item=><VideoItem obj={item}/>)
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Video;