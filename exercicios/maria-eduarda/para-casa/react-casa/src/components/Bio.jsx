import Title from "./Title"
import Text from "./Text"
import Image from "./Image"

import maria from "../assets/eu.jpg"

function Bio() {
    return (
        <div className="bio">

        <Title text="Maria Eduarda"/>
        <Text text="Tenho 23 anos, sou de Recife e estou em transição de carreira."/>
        <Image img={maria} description="Maria"/>
        

        </div>
    )
    }
    
    export default Bio