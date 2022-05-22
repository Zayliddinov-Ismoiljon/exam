

const VideoItem=({obj})=>{

    return(
        <>
            <li style={{width:"367px"}} className="video-item">
                <img style={{width:"367px", height:"213px"}} className="video-img" src={obj.url} alt="" />
                <h3 style={{
                    fontWeight:"700", fontSize:"26px", color:"#19202C"
                }} className="video-heading">{obj.title}</h3>
            </li>
        </>
    )
}

export default VideoItem;