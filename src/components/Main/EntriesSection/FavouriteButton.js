import { useState } from "react"
import { ReactComponent as Star } from "./starSvg/star.svg"
import { ReactComponent as StarFilled } from "./starSvg/star-filled.svg"
import "./starSvg/star-filled.css"
import "./starSvg/star.css"

export default function FavouriteButton(){
    const [isFavourite, setIsFavourite] = useState(false)
/* setIsFavourite(!isFavourite) */
    return (isFavourite? <StarFilled className="svg-starFilled"/>:<Star className="svg-star"/>)
}