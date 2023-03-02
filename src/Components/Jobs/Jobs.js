import React from 'react'
import './Jobs.css'
import Lottie from "react-lottie";
import Loca from './geol.json'
import Cumm from './cumm.json'
import Sea from './sea.json'
import Star from './star.json'

import JobImg from '../../assets/assets/images/job.png'

function Jobs() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Loca,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };

      const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: Cumm,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };


      const defaultOptions3 = {
        loop: true,
        autoplay: true,
        animationData: Sea,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };


      const defaultOptions4 = {
        loop: true,
        autoplay: true,
        animationData: Star,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
  return (
    <>
    <section className='jobs'>
        <div className='container'>
            
            <div className='job-head'>
                <h1>Find Jobs on your finguretips , Access to best jobs and leading professionals in the industry
</h1>

            </div>
            <div className='row align-items-center text-center'>
                <div className='col-md-3 col-6'>
                    <div className='job-box'>
                    <Lottie options={defaultOptions} className="loti-1" />
                        <p>GEO LOCATION SEARCH</p>
                        
                    </div>
                </div>
                <div className='col-md-3 col-6'>
                <div className='job-box-2'>
                <Lottie options={defaultOptions2} className="loti-1" />
                        <p>EASY TO MANAGE JOBS</p>
                        </div>
                    </div>
                    <div className='col-md-3 col-6'>
                    <div className='job-box-3'>
                    <Lottie options={defaultOptions4} className="loti-1" height={262} />
                        <p>TOP CAREERS</p>
                        </div>
                    </div>
                    <div className='col-md-3 col-6'>
                    <div className='job-box-4'>
                    <Lottie options={defaultOptions3} className="loti-1"  />
                        <p>SEARCH EXPERTS</p>
                        </div>
                    </div>
                
            </div>
            
            <div className='job-soon'>
                <h1>Our job Portal is coming soon.....
</h1>
                
            </div>

        </div>
        </section>
        <section style={{marginTop:'1%'}}>
            <img src={JobImg} alt=""/>
        </section>
        <section style={{paddingBottom:'3%',background:'#1b1c1e'}}>
            </section>
      </>
  )
}

export default Jobs