import React from 'react'
import Navbar from './Navbar'
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <>
        <div className="home">
            <Navbar />
            <div className="onTablet">
                <div className="container flex">
                    <div className="flow">
                    <h4 className="text-light ff-sans-cond uppercase fs-500 letter-spacing-1">So, you want to travel to</h4>
                    <h1 className="text-white ff-serif uppercase fs-800">space</h1>
                    <p className="text-light ff-sans-normal fs-400">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                    </div>
                    <Link to ="/destination" className="large-button uppercase ff-serif fs-600 text-dark bg-white">Explore</Link>
                </div>
            </div>
        </div>   
        </>
        
    )
}