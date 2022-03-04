import React from 'react'
import Navbar from './Navbar'
import technologies from "../data.json"
import Vehicle from './Vehicle'

export default function Technology(){
  
    const[tech,setTech]=React.useState({
        name: technologies.technology[0].name,
        landscape : technologies.technology[0].images.landscape,
        portrait : technologies.technology[0].images.portrait,
        description:technologies.technology[0].description,
    })
    const[active,setActive]=React.useState({ One:"true",Two:"",Three:""})
    function handleClick(e){
        for(let i=0; i<3; i++){
            if(e.target.value===technologies.technology[i].name){
               setActive({
                   One: e.target.value==='Launch vehicle' ? 'true' : '',
                   Two: e.target.value==='Spaceport' ? 'true' : '',
                   Three:e.target.value==='Space capsule' ? 'true' : '',
               })
               setTech({
                   name: technologies.technology[i].name,
                   portrait : technologies.technology[i].images.portrait,
                   landscape : technologies.technology[i].images.landscape,
                   description:technologies.technology[i].description,
               })
            }
        }
   }
    return(
        <div className="technology">
            <Navbar />
            <h3 className="ff-sans-cond fs-500 text-white uppercase letter-spacing-1"><span className="ff-sans-cond fs-500 text-white fw-700" style={{'marginRight': '.5em', 'color':'hsl(var(---clr-white) /.25)'}}>03</span>Space lunch 101</h3>
            <div className="flex onTablet">
            <ul className="number-indicators">
                    <li><button className="text-white ff-sans-cond fs-400" onClick={handleClick} value={technologies.technology[0].name} aria-selected={active.One}>1</button></li>
                    <li><button className="text-white ff-sans-cond fs-400" onClick={handleClick} value={technologies.technology[1].name} aria-selected={active.Two}>2</button></li>
                    <li><button className="text-white ff-sans-cond fs-400" onClick={handleClick} value={technologies.technology[2].name} aria-selected={active.Three}>3</button></li>
            </ul>
            <Vehicle name={tech.name}
                     landscape={tech.landscape}
                     portrait={tech.portrait}
                     description={tech.description}
            />
            </div>
        </div>
        
    )
}