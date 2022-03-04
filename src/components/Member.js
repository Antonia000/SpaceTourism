import React from 'react'

export default function Member(props){

    return(
        <div className="member flex container">
                 <div className="grid">
                        <h4 className="ff-serif fs-400 text-light uppercase">{props.role}</h4>
                        <h2 className="ff-serif fs-700 text-white uppercase">{props.name}</h2>
                        <p className="ff-sans-normal fs-300 text-light">{props.bio}</p>
                    </div>
                     <img src={require(`../assets/crew/${props.profile}`)}  alt={props.name}/>
                </div>
    )
}