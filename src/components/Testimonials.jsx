import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";
import { useState } from "react";

const Testimonials = () => {
  const { Testimonials } = content;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-bg_light_primary py-14">
      <div className="md:container px-5">
        <h2 className="title text-center" data-aos="fade-down">
          {Testimonials.title}
        </h2>
        <h4 className="subtitle text-center mb-8" data-aos="fade-down">
          {Testimonials.subtitle}
        </h4>

        <div className="flex flex-col items-center">
          <Swiper
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1.7}
            onSlideChange={(e) => {
              setActiveIndex(e.realIndex);
            }}
            modules={[Pagination, Autoplay]}
            className="md:h-[30rem] h-[40rem] max-w-3xl"
          >
            {Testimonials.testimonials_content.map((content, i) => (
              <SwiperSlide key={i}>
                <div
                  className={`duration-500 bg-bg_light_primary mx-8 border-2 p-8 h-full rounded-2xl flex items-center gap-6 border-slate-200 md:flex-row flex-col
                    ${activeIndex !== i && "scale-95 blur-sm"}`}
                >
                  <img src={content.img} alt={content.name} className="h-64 rounded-full object-cover" />
                  <div>
                    <p className="sm:text-base text-sm">{content.review}</p>
                    <br />
                    <h6 className="font-semibold">{content.name}</h6>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
