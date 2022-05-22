import Cover from "../../Assets/Images/Cover.png"
// import {Link} from "react-router-dom"

const SliderItem=({obj})=>{

    // const {id,img, title}=obj

    return(
        
            <li style={{marginRight:"40px"}} className="slidersection__item">
                <img src={obj.url} alt="slider image" className="slidersection__img" />
                <h3 className="slidersection__title">{obj.title}</h3>
                {/* <p className="slidersection__text">80k views  ·  3 days ago</p> */}
            </li>
        
    )
}

export default SliderItem;