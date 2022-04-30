import { useContext } from "react";
import { userContext } from "../Context/Context.jsx";



function MetarTaf(){
    const {location, raw_text,taf} = useContext(userContext)

    return(
        <div>
            <span style={{fontSize:'1.5rem', fontWeight: 'bold'}}>{location}</span> <hr/>
            <strong>METAR: </strong> {raw_text}<br/>
            <strong>TAF: </strong> {taf}
        </div>
    )
}
export default MetarTaf