import { Swiper, SwiperSlide } from "swiper/react";
import './Part.css'
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

function PartnersMob() {
  return (
    <section className='partners mob-part'>
      <div className='container'>
        <div className='part-head text-center'>
          <h1>Featured In</h1>
        </div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
        <div className='row justify-content-center align-items-center'>
        <div className='col-md-3 col-6'>
          <div className='text-end '>
            <img src="https://ik.imagekit.io/cforcrypto/Dework/features/Fox_new.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669269583354" alt="" className='fox'/>
            
          </div>
          </div>    
          <div className='col-md-3 col-6'>
          <div className='part-img-box'>
            <img src="https://ik.imagekit.io/cforcrypto/Dework/features/Business_insider.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669269583817" alt="" className='insider'/>
            
          </div>
          </div>    
        
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="row justify-content-center align-items-center">
          <div className='col-md-3 col-6'>
          <div className=''>
            <img src="https://ik.imagekit.io/cforcrypto/Dework/features/Bloomberg.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669269583303" alt="" className='insider'/>
            
          </div>
          </div>    
          <div className='col-md-3 col-6'>
          <div className='text-start'>
            <img src="https://ik.imagekit.io/cforcrypto/Dework/features/nbc.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669269583611" alt=""  className='fox'/>
            
          </div>
          </div> 
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='row justify-content-center align-items-center'>
       


       {/* second-row */}
       <div className='col-md-4 col-6'>
       <div className='text-end'>
         <img src="https://ik.imagekit.io/cforcrypto/Dework/features/entrepreneur.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669269582176" alt="" className='enter'/>
         
       </div>
       </div> 

       <div className='col-md-3 col-6'>
       <div className='part-img-box'>
         <img src="https://ik.imagekit.io/cforcrypto/Dework/features/yahoo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669269582184" alt="" className='enter'/>
         
       </div>
       </div> 


       
       </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className='row justify-content-center align-items-center'>
       


         

       {/* 3rd-row */}

       <div className='col-md-6 col-6'>
       <div className='text-end'>
         <img src="https://ik.imagekit.io/cforcrypto/Dework/features/Mkt_watch.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669269583547" alt="" className='enter'/>
         
       </div>
       </div> 
       <div className='col-md-6 col-6'>
       <div className='text-start'>
         <img src="https://ik.imagekit.io/cforcrypto/Dework/features/seeking_alpha.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669269583686" alt="" className='enter'/>
         
       </div>
       </div> 
     </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row justify-content-center align-items-center">
          <div className='col-md-4 col-6'>
       <div className='text-start'>
         <img src="https://ik.imagekit.io/cforcrypto/Dework/features/coindesk.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669269582136" alt="" className='enter'/>
         
       </div>
       </div> 
          </div>
        </SwiperSlide>
       
      </Swiper>
    
        
      </div>
      
     </section>
  )
}

export default PartnersMob