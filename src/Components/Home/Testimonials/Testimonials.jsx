import SectionTitle from "../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

const Testimonials = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
      fetch('reviews.json')
      .then(res=>res.json())
      .then(data=>setReviews(data))
    },[])
  return (
    <section>
      <SectionTitle
        subHeading="What Our Client Says"
        heading="Testimonials"
      ></SectionTitle>
     
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
       {
        reviews.map(review=><SwiperSlide key={review._id}>
            <div className="p-16 text-center space-y-3">
                <p>{review.details}</p>
                <h2 className="text-orange-400 text-3xl">{review.name}</h2>
            </div>
        </SwiperSlide>)
       }
      </Swiper>
    </section>
  );
};

export default Testimonials;
