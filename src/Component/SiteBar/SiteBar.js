import "./sitebar.css";
import Guess from "../../Assets/Images/guess.png"
import bella from "../../Assets/Images/bella.png"
import nora from "../../Assets/Images/nora.png"
import enuic from "../../Assets/Images/enuice.png"
import emma from "../../Assets/Images/emma.png"
import leah from "../../Assets/Images/leah.png"

const SiteBar=()=>{
    return(
        <div className="sitebar">
            <ul className="sitebar__list">
                <li className="sitebar__item">
                    <a className="sitebar__link" href="#">Home</a>
                </li>
                <li className="sitebar__item">
                    <a className="sitebar__link" href="#">Trending</a>
                </li>
                <li className="sitebar__item">
                    <a className="sitebar__link" href="#">Subscriptions</a>
                </li>
                <li className="sitebar__item">
                    <a className="sitebar__link" href="#">Library</a>
                </li>
                <li className="sitebar__item">
                    <a className="sitebar__link" href="#">History</a>
                </li>
                <li className="sitebar__item">
                    <a className="sitebar__link" href="#">Watch later</a>
                </li>
                <li className="sitebar__item">
                    <a className="sitebar__link" href="#">Favourites</a>
                </li>
                <li className="sitebar__item">
                    <a className="sitebar__link" href="#">Liked videos</a>
                </li>
                <li className="sitebar__item">
                    <a className="sitebar__link" href="#">Music</a>
                </li>
                <li className="sitebar__item">
                    <a className="sitebar__link" href="#">Games</a>
                </li>
                <li className="sitebar__item">
                    <a className="sitebar__link" href="#">Show more</a>
                </li>
            </ul>
            <h3 className="sitebar__heading">Subscriptions</h3>
            <ul className="sitebar__sublist">
                <li className="sitebar__subitem">
                    <a href="3" className="sitebar__sublink">
                        <img className="sitebar__subimg" src={Guess} alt="guess pic" />Gussie Singleton
                    </a>
                </li>
                <li className="sitebar__subitem">
                    <a href="3" className="sitebar__sublink">
                        <img className="sitebar__subimg" src={nora} alt="nora pic" />Nora Francis
                    </a>
                </li>
                <li className="sitebar__subitem">
                    <a href="3" className="sitebar__sublink">
                        <img className="sitebar__subimg" src={bella} alt="bella pic" />Belle Briggs
                    </a>
                </li>
                <li className="sitebar__subitem">
                    <a href="3" className="sitebar__sublink">
                        <img className="sitebar__subimg" src={enuic} alt="unic pic" />Eunice Cortez
                    </a>
                </li>
                <li className="sitebar__subitem">
                    <a href="3" className="sitebar__sublink">
                        <img className="sitebar__subimg" src={emma} alt="emma pic" />Emma Hanson
                    </a>
                </li>
                <li className="sitebar__subitem">
                    <a href="3" className="sitebar__sublink">
                        <img className="sitebar__subimg" src={leah} alt="leah pic" />Leah Berry
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SiteBar;