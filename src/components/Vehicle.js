import React from 'react'

export default function Vehicle(props){
  
    return(
        <div className="vehicle flex">
            <div className="grid">
                <p className="ff-sans-cond fs-300 text-light uppercase">The terminology...</p>
                <h2 className="ff-serif fs-700 text-white uppercase">{props.name}</h2>
                <p className="ff-sans-normal fs-300 text-light">{props.description}</p>
            </div>
            {window.innerWidth <700 ? <img src={require(`../assets/technology/${props.landscape}`)} alt={props.name} /> : 
             <img src={require(`../assets/technology/${props.portrait}`)} alt={props.name} />}
        </div>
        
    )
}