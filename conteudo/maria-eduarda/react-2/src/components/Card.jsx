import CardTitle from "./CardTitle"
import CardSubtitle from "./CardSubtitle"
import Image from "./Image"


const Card = ({image, altText, title, subtitle}) => {
    return (
        <div className="card">
            <Image image={image} altText={altText} />
            <CardTitle content={title} />
            <CardSubtitle content={subtitle} />
        </div>
    )
}

export default Card