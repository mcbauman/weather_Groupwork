import { useContext } from "react";
import { userContext } from "../Context/Context.jsx";


function Metar(){
    const {location, raw_text} = useContext(userContext)

    return(
        <div>
            <span style={{fontSize:'1.5rem', fontWeight: 'bold'}}>{location}</span> <hr/>
            <strong>METAR: </strong> {raw_text}
        </div>
    )
}
export default Metar