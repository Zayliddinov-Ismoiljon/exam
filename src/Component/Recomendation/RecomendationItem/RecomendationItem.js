import Person from "../../../Assets/Images/person.png"
import "./recomendationitem.css"

const RecomendationItem=({obj})=>{
    return(
        <>
        <li className="recomendation__item">
            <img className="recomendation__img" src={obj.url} alt="person img" />
            <h3 className="recomendation__heading">{obj.title}</h3>
            <p className="recomendation__text">34k views  ·  5 months ago</p>
        </li>
        </>
    )
}

export default RecomendationItem;