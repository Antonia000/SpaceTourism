import React from 'react'
import Member from './Member'
import Navbar from './Navbar'
import crews from "../data.json"

export default function Crew(){
    const[member,setMember]=React.useState({
        name: crews.crew[0].name,
        profile : crews.crew[0].images.webp,
        bio: crews.crew[0].bio,
        role: crews.crew[0].role,
    })
    const[active,setActive]=React.useState({Commander:"true",MissionSpecialist:"",Pilot:"",FlightEngineer:""})

    function handleClick(e){
        for(let i=0; i<4; i++){
            if(e.target.htmlFor===crews.crew[i].role){
               setActive({
                Commander: e.target.htmlFor==='Commander' ? 'true' : '',
                MissionSpecialist: e.target.htmlFor==='MissionSpecialist' ? 'true' : '',
                Pilot:e.target.htmlFor==='Pilot' ? 'true' : '',
                FlightEngineer:e.target.htmlFor==='FlightEngineer' ? 'true' : ''
               })
               setMember({
                name: crews.crew[i].name,
                profile : crews.crew[i].images.webp,
                bio:crews.crew[i].bio,
                role:crews.crew[i].role
               })
            }
        }
    }
    return(
        <div className="crew">
        
                <Navbar />
                <div className="grid">
                 
                    <h3 className="ff-sans-cond fs-500 text-white uppercase letter-spacing-1"><span className="ff-sans-cond fs-500 text-white fw-700" style={{'marginRight': '.5em', 'color':'hsl(var(---clr-white) /.25)'}}>02</span>Meet your crew</h3>
                    <div className="dot-indicators">
                      <input type="radio" id="commander" name="member" value="commander"/>
                      <label htmlFor="Commander" onClick={handleClick} aria-selected={active.Commander}></label>
                      <input type="radio" id="mission-specialist" name="member" value="mission-specialist" />
                      <label htmlFor="MissionSpecialist" onClick={handleClick} aria-selected={active.MissionSpecialist}></label>
                      <input type="radio" id="pilot" name="member" value="pilot" />
                      <label htmlFor="Pilot" onClick={handleClick} aria-selected={active.Pilot}></label>
                      <input type="radio" id="flight-engineer" name="member" value="flight-engineer" />
                      <label htmlFor="FlightEngineer" onClick={handleClick} aria-selected={active.FlightEngineer}></label>
                    </div> 
               
                <Member name={member.name}
                        profile={member.profile}
                        bio={member.bio}
                        role={member.role}
                /> 
                </div>
     
        </div>
    )
}