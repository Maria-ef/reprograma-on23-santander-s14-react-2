import Subtitle from "./Subtitle"
import Text from "./Text"
import Image from "./Image"

import maria from "../assets/eu.jpg"

function Bio() {
    return (
        <div className="bio">

        <Subtitle content="Prazer, Maria Eduarda"/>
        <Text content="Tenho 23 anos, sou de Recife e estou em transição de carreira."/>
        <Image img={maria} altText="foto Maria"/>
        

        </div>
    )
    }
    
    export default Bio;