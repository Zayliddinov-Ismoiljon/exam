import "./food.css";
import FoodItem from "./FoodItem/FoodItem";
import FoodLogo from "../../Assets/Images/foodlogo.png";
import Left from "../../Assets/Images/Left.png";
import Right from "../../Assets/Images/Right.png";
import { useEffect, useState } from "react";

const Food=()=>{

    const[food, setFood]=useState([])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then(response=>response.json())
        .then(data=>setFood(data))
    },[])


    return(
        <>
            <div className="food-header">
                <div className="foodheader__inner">
                    <img src={FoodLogo} alt="food logo" />
                    <h3 className="food__title">Food & Drink</h3>
                    <p className="foodheader__text">Recommended channel for you</p>
                </div>
                <div className="foodheader__about">
                    <button className="foodabout__btn">Subscribe 2.3m</button>
                    <div className="dolice-btn">
                    <button className="dolice__btn1">
                        <img src={Left} alt="left btn" />
                    </button>
                    <button className="dolice__btn2">
                        <img src={Right} alt="left btn" />
                    </button>
                </div>
                </div>
            </div>
            <ul style={{width:"1650px", overflowX:"scroll"}} className="food__list">
                {
                    food.splice(0,20).map(item=><FoodItem obj={item}/>)
                }
            </ul>
        </>
    )
}

export default Food;