import "./Main.css";
import blair from "../../Assets/Images/guess.png";
import Left from "../../Assets/Images/Left.png";
import Right from "../../Assets/Images/Right.png"
import SliderSection from "../SliderSection/SliderSection";
import Recomendation from "../Recomendation/Recomendation";
import Food from "../Food/Food";

const Main=()=>{
    return(
        <div className="dolice-blair">
            <section className="dolice__section">
                <div className="dolice">
                    <img src={blair} alt="section logo" />
                    <h3 className="main__title">Dollie Blair</h3>
                </div>
                <div className="dolice-btn">
                    <button className="dolice__btn1">
                        <img src={Left} alt="left btn" />
                    </button>
                    <button className="dolice__btn2">
                        <img src={Right} alt="left btn" />
                    </button>
                </div>
            </section>
            <SliderSection/>
            <Recomendation/>
            <Food/>
        </div>
    )
}

export default Main;