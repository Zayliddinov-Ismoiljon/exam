import "./slidersection.css";
import { useEffect, useState } from "react";
import SliderItem from "../SliderItem/SliderItem";


const SliderSection=()=>{

    const [silder, setSlider]=useState([])

    useEffect(()=>{
        fetch(
			`https://jsonplaceholder.typicode.com/photos`, 
		)
			.then((response) => response.json())
			.then((data) => setSlider(data));
	}, [])


    return(
        <>
            <ul style={{width:"1650px", overflowX:"scroll"}} className="slidersection__list">
                {
                    silder.splice(0,20).map(item=><SliderItem obj={item}/>)
                }
            </ul>
        </>
    )
}

export default SliderSection;