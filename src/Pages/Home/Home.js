import { useEffect, useState } from "react";
import Header from "../../Component/Header/Header";
import Main from "../../Component/Main/Main";
import SiteBar from "../../Component/SiteBar/SiteBar";
import "./home.css";

const Home=()=>{
    return(
        <>
            <Header/>
            <div className="site-main">
                <SiteBar/>
                <Main/>
            </div>
        </>
    )
}

export default Home;