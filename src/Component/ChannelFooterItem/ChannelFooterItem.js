import "./channelfooteritem.css";
import footerImg from "../../Assets/Images/footerimg.png";

const ChannelFooterItem=({obj})=>{

    // const {id,title}=obj

    return(
        <>
            <li className="channel-footer__item">
                <img src={obj.url} alt="footer image" className="channel-footer__img" />
                <h3 className="channel-footer__title">{obj.title}</h3>
            </li>
        </>
    )
}

export default ChannelFooterItem;