import React from 'react'

export default function Planet(props){

    return(
        <div className="planet">
                 <div className="planet-content flex">
                     <img src={require(`../assets/destination/${props.pic}`)}  alt={props.name}/>
                     <div className="planet-details grid">
                        <h1 className="ff-serif fs-800 text-white uppercase">{props.name}</h1>
                        <p className="ff-sans-normal fs-400 text-light">{props.description}</p>
                        <div className="flex">
                            <div className="grid">
                                <h4 className="ff-sans-cond fs-300 text-light uppercase">Avg. distance</h4>
                                <h2 className="ff-serif fs-500 text-white uppercase">{props.distance}</h2>
                            </div>
                            <div className="grid">
                                <h4 className="ff-sans-cond fs-300 text-light uppercase">Est. travel time</h4>
                                <h2 className="ff-serif fs-500 text-white uppercase">{props.travel}</h2>
                            </div>
                        </div>
                    </div>
                    
                </div>
             </div>
    )
}