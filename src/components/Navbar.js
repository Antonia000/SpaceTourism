import React from 'react'
import {Link } from "react-router-dom";
import logo from '../assets/shared/logo.svg';
import hamburgerMenu from '../assets/shared/icon-hamburger.svg';

export default function Navbar() {
    const[hide,setHide]=React.useState(false)
    const[active,setActive]=React.useState({
        '00Home': (window.location.pathname==="/home" || window.location.pathname==='/') ? 'active' : '',
        '01Destination' : window.location.pathname==="/destination" ? 'active' : '',
        '02Crew':window.location.pathname==="/crew" ? 'active' : '',
        '03Technology':window.location.pathname==="/technology" ? 'active' : ''
    })
    function handleClick(e){
            setActive((prevState)=>{
                if(e.target.textContent !== ""){
                    return{
                        '00Home': (e.target.textContent==='00Home' || e.target.textContent==='00') ? 'active' : '',
                        '01Destination': (e.target.textContent==='01Destination' || e.target.textContent==='01') ? 'active' : '',
                        '02Crew': (e.target.textContent==='02Crew'|| e.target.textContent==='02') ? 'active' : '',
                        '03Technology': (e.target.textContent==='03Technology'|| e.target.textContent==='03') ? 'active' : ''
                        }
                }
                else{
                    console.log("Eroareee")
                }
            })
    }

    return (
        <div className="flex">
            <div className="mobile">
                <img className="logo" src={logo} width="45px" height="45px" alt="logo" />
                <img className="primary-navigation-mobile" src={hamburgerMenu} alt="menu-icon" width="40px" height="40px" onClick={()=>{hide ? setHide(false) : setHide(true)}}/>
            </div>
            <ul className="primary-navigation tablet-nav underline-indicators flex">
                <li className={active['00Home']} onClick={(e)=>handleClick(e)}><Link to="/home" className="text-white ff-sans-cond fs-400 letter-spacing-2"><span className="fw-700">00</span>Home</Link></li>
                <li onClick={(e)=>handleClick(e)} className={active['01Destination']}><Link to="/destination" className="text-white ff-sans-cond fs-400 letter-spacing-2"><span className="fw-700">01</span>Destination</Link></li>
                <li className={active['02Crew']} onClick={(e)=>handleClick(e)}><Link to="/crew" className="text-white ff-sans-cond fs-400 letter-spacing-2"><span className="fw-700">02</span>Crew</Link></li>
                <li className={active['03Technology']} onClick={(e)=>handleClick(e)}><Link to="/technology" className="text-white ff-sans-cond fs-400 letter-spacing-2"><span className="fw-700">03</span>Technology</Link></li>
            </ul> 
            {hide &&<ul className="onMobile underline-indicators flex">
                <li className={active['00Home']} onClick={(e)=>handleClick(e)}><Link to="/home" className="text-white ff-sans-cond fs-400 letter-spacing-2"><span className="fw-700">00</span>Home</Link></li>
                <li className={active['01Destination']} onClick={(e)=>handleClick(e)}><Link to="/destination" className="text-white ff-sans-cond fs-400 letter-spacing-2"><span className="fw-700">01</span>Destination</Link></li>
                <li className={active['02Crew']} onClick={(e)=>handleClick(e)}><Link to="/crew" className="text-white ff-sans-cond fs-400 letter-spacing-2"><span className="fw-700">02</span>Crew</Link></li>
                <li className={active['03Technology']} onClick={(e)=>handleClick(e)}><Link to="/technology" className="text-white ff-sans-cond fs-400 letter-spacing-2"><span className="fw-700">02</span>Technology</Link></li>
            </ul> }
            

        </div>

 )}
 //style={{'display': hide ? 'grid' : (onDesk ? 'flex' :'none')}}