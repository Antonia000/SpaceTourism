import React from 'react'
import Navbar from './Navbar'
import { Link } from "react-router-dom";
import planets from "../data.json"
import Planet from './Planet'


export default function Destionation(){
 
 const[planet,setPlanet]=React.useState({
     name: planets.destinations[0].name,
     pic : planets.destinations[0].images.webp,
     description:planets.destinations[0].description,
     distance:planets.destinations[0].distance,
     travel:planets.destinations[0].travel
 })
 const[active,setActive]=React.useState({ Moon:"active",Mars:"",Europa:"",Titan:""})

    function handleClick(e){

         for(let i=0; i<4; i++){
             if(e.target.textContent===planets.destinations[i].name){
                setActive({
                    Moon: e.target.textContent==='Moon' ? 'active' : '',
                    Mars: e.target.textContent==='Mars' ? 'active' : '',
                    Europa:e.target.textContent==='Europa' ? 'active' : '',
                    Titan:e.target.textContent==='Titan' ? 'active' : ''
                })
                setPlanet({
                    name: planets.destinations[i].name,
                    pic : planets.destinations[i].images.webp,
                    description:planets.destinations[i].description,
                    distance:planets.destinations[i].distance,
                    travel:planets.destinations[i].travel
                })
             }
         }
    }
    return(
        <div className="destination">
            <Navbar />
            <div className="onTablet onDesk">
             <div className="flex">
                <h3 className="ff-sans-cond fs-500 text-white uppercase letter-spacing-1"><span className="ff-sans-cond fs-500 text-white fw-700" style={{'marginRight': '.5em', 'color':'hsl(var(---clr-white) /.25)'}}>01</span>Pick your destination</h3>
                <ul className="planet-nav underline-indicators flex">
                    <li className={active.Moon}><button className="text-white ff-sans-cond fs-400 letter-spacing-2 uppercase"  onClick={handleClick}>Moon</button></li>
                    <li className={active.Mars}><button className="text-white ff-sans-cond fs-400 letter-spacing-2 uppercase" onClick={handleClick}>Mars</button></li>
                    <li className={active.Europa}><button className="text-white ff-sans-cond fs-400 letter-spacing-2 uppercase" onClick={handleClick}>Europa</button></li>
                    <li className={active.Titan}><button className="text-white ff-sans-cond fs-400 letter-spacing-2 uppercase" onClick={handleClick}>Titan</button></li>
                </ul>
             </div>
            </div>
            <Planet name={planet.name}
                    description={planet.description}
                    distance={planet.distance}
                    travel={planet.travel}
                    pic={planet.pic}/>
        </div> 
    )
}