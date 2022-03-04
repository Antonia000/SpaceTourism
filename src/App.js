import React from 'react'

export default function App(){

 return (
   <div className="container">
       <h1 className="text-white uppercase">Design system</h1>
       <section id="colors">
          <h2 className="text-numbered">01<span className="text-numbered-span"> colors</span></h2>
          <div className="flex">
            <div className="container">
              <div className="text-white ff-serif" style={{'padding':'3rem 1rem 1rem', 'border':'1px solid white', 'width':'250px','backgroundColor': 'hsl(231, 77%, 90%,2%)'}}>
              #0B0D17
            </div>
                <p className="text-white ff-sans-normal"><span className="text-light" style={{'marginRight':'50px'}}>RGB</span>11, 13, 23</p>
                <p className="text-white ff-sans-normal"><span className="text-light" style={{'marginRight':'50px'}}>HSL</span>230°, 35%, 7%</p>
          </div>
          <div className="container">
              <div className="bg-light ff-serif" style={{'padding':'3rem 1rem 1rem', 'border':'1px solid white' ,'width':'250px'}}>
              #D0D6F9
            </div>
            <p className="text-white ff-sans-normal"><span className="text-light" style={{'marginRight':'50px'}}>RGB</span>208, 214, 249</p>
            <p className="text-white ff-sans-normal"><span className="text-light" style={{'marginRight':'50px'}}>HSL</span>231°, 77%, 90%</p>
          </div>
          <div className="container">
              <div className="bg-white ff-serif" style={{'padding':'3rem 1rem 1rem', 'border':'1px solid white','width':'250px'}}>
              #FFFFFF
            </div>
                <p className="text-white ff-sans-normal"><span className="text-light" style={{'marginRight':'50px'}}>RGB</span>255, 255, 255</p>
                <p className="text-white ff-sans-normal"><span className="text-light" style={{'marginRight':'50px'}}>HSL</span>0°, 0%, 100%</p>
          </div>
          </div>
       </section>

       <section id="typography" style={{'margin': '4rem 0'}} className="text-white">
                <h2 className="text-numbered">02 <span className="text-numbered-span">Typography</span></h2>
                <div className="flex">
                    <div className="flow" style={{'flexBasis': '100%'}}>
                        <div> 
                            <p className="fs-400 ff-sans-normal text-light">Heading 1 - Bellefair Regular - 150px</p>
                            <p className="fs-900 ff-serif uppercase">Earth</p>
                        </div>
                        <div> 
                            <p className="fs-400 ff-sans-normal text-light">Heading 2 - Bellefair Regular - 100px</p>
                            <p className="fs-800 ff-serif uppercase">Venus</p>
                        </div>
                        <div> 
                            <p className="fs-400 ff-sans-normal text-light">Heading 3 - Bellefair Regular - 56px</p>
                            <p className="fs-700 ff-serif uppercase">Jupiter & Saturn</p>
                        </div>
                        <div> 
                            <p className="fs-400 ff-sans-normal text-light">Heading 4 - Bellefair Regular - 32px</p>
                            <p className="fs-600 ff-serif uppercase">Uranus, Neptune, & Pluto</p>
                        </div>
                        <div> 
                            <p className="text-accent">Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space</p>
                            <p className="fs-500 ff-sans-cond uppercase text-light letter-spacing-1 ">So, you want to travel to space</p>
                        </div>
                    
                    </div>
                    
                    <div className="flow"  style={{'flexBasis': '100%'}}>
                        <div> 
                            <p className="fs-400 ff-sans-normal text-light">Subheading 1 - Bellefair Regular - 28px</p>
                            <p className="fs-500 ff-serif text-white uppercase">384,400 km</p>
                        </div>
                        <div> 
                            <p className="fs-400 ff-sans-normal text-light">Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character Space</p>
                            <p className="fs-200 ff-sans-cond text-white uppercase letter-spacing-3">Avg. Distance</p>
                        </div>
                        <div> 
                            <p className="fs-400 ff-sans-normal text-light">Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space</p>
                            <p className="fs-300 ff-sans-cond text-white uppercase letter-spacing-2">Europa</p>
                        </div>
                        <div> 
                            <p className="fs-400 ff-sans-normal" style={{'color':'hsl(var(---clr-light) /.45)'}}>Body Text</p>
                             <p className="fs-400 ff-sans-normal">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. </p>
                        </div>
                    </div>
                </div>
            </section>

            <section  id="interactive-elements" className="flow">
                <h2 className="text-numbered">03<span className="text-numbered-span"> Interactive elements</span></h2>
                <div>
                    <nav>
                        <ul className="primary-navigation underline-indicators flex">
                            <li className="active"><a className="uppercase text-white letter-spacing-2" href="#"><span>01</span>Active</a></li>
                            <li><a className="uppercase text-white letter-spacing-2" href="#"><span>02</span>Hovered</a></li>
                            <li><a className="uppercase text-white letter-spacing-2" href="#"><span>03</span>Idle</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="tab-list underline-indicators flex">
                            <button aria-selected="true" className="uppercase ff-sans-cond text-white bg-dark letter-spacing-2">Moon</button>
                            <button aria-selected="false" className="uppercase ff-sans-cond text-white bg-dark letter-spacing-2">Mars</button>
                            <button aria-selected="false" className="uppercase ff-sans-cond text-white bg-dark letter-spacing-2">Europa</button>
                </div>
                <div className="dot-indicators flex">
                            <button aria-selected="true"><span className="sr-only">Slide title</span></button>
                            <button aria-selected="false"><span className="sr-only">Slide title</span></button>
                            <button aria-selected="false"><span className="sr-only">Slide title</span></button>
                </div>

                <div className="number-indicators flex">
                            <button aria-selected="true"><span className="">1</span></button>
                            <button aria-selected="false"><span className="">2</span></button>
                            <button aria-selected="false"><span className="">3</span></button>
                </div>

                <div className="flex">
                    <div>
                        <a href="#" className="large-button uppercase ff-serif fs-600 text-dark bg-white">Explore</a>
                    </div>
                    
                    <div style={{'marginBottom': '50vh'}}>
                    </div>
                </div>

                

            </section>
   </div>
 )
}
