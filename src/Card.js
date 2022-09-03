import React from "react";

export default function Card (props) {
    var bdgtxt
    if(props.item.openSpots === 0) {
        bdgtxt = "SOLD OUT"
    } else if(props.item.location === "Online") {
        bdgtxt = "ONLINE"
    }
    return ( 
        <div className="card">
            {bdgtxt && <div className="props-badge">{bdgtxt}</div>}
            <img src={`${props.item.coverImg}`} className="props-img"/>
            <div className="star-span">
                <span><img src="https://www.svgrepo.com/show/6977/star.svg" alt="star" height={"20px"} /></span>
                <span>{props.item.stats.rating} - </span>
                <span>({(props.item.stats.reviewCount)})</span>
                <span>{props.item.location}</span>
            </div>
            <p className="props-title">{props.item.title}</p>
            <p className="props-price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}