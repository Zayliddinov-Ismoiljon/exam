import "./recomendation.css";
import RecomendationItem from "./RecomendationItem/RecomendationItem";
import Left from "../../Assets/Images/Left.png";
import Right from "../../Assets/Images/Right.png";
import { useEffect, useState } from "react";

const Recomendation=()=>{

    const [rec, setRec]=useState([])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then(response=>response.json())
        .then(data=>setRec(data))
    })

    return(
        <>
            <div className="recomendation__about">
                <h2 className="recomendation__title">Recommended</h2>
                <div className="dolice-btn">
                    <button className="dolice__btn1">
                        <img src={Left} alt="left btn" />
                    </button>
                    <button className="dolice__btn2">
                        <img src={Right} alt="left btn" />
                    </button>
                </div>
            </div>
            
            <ul style={{width:"1650px", overflowX:"scroll"}} className="recomendation__list">
                {
                    rec.splice(0,20).map(item=> <RecomendationItem obj={item}/>)
                }
            </ul>
        </>
    )
}

export default Recomendation;