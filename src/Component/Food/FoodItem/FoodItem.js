
import iceCream from "../../../Assets/Images/icecream.png"

const FoodItem=({obj})=>{
    return(
        <li style={{marginRight:"40px"}} className="food__item">
            <img style={{width:"250px", height:"150px"}} src={obj.url} alt="Food item img" className="fooditem__img" />
            <h3 className="fooditem__title">{obj.title}</h3>
            <p className="fooditem__text">240k views  ·  4 months ago</p>
        </li>
    )
}

export default FoodItem;