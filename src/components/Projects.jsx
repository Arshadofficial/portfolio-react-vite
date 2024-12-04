import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Projects = () => {
  const { Projects } = content;

  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
     
        <div className="text-center mb-8">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-down"
          >
            {Projects.title}
          </h2>
          <h4
            className="text-lg md:text-xl text-gray-600"
            data-aos="fade-down"
          >
            {Projects.subtitle}
          </h4>
        </div>

      
        <div
          className="flex flex-col lg:flex-row items-center gap-8"
          style={{ height: "auto" }}
        >
       
          <img
            src={Projects.image}
            alt="Project Showcase"
            data-aos="fade-right"
            className="w-full lg:w-[50%] max-w-lg h-auto object-cover rounded-lg"
          />

        
          <Swiper
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination, Autoplay]}
            className="w-full lg:w-[50%] max-w-lg rounded-2xl pb-12 drop-shadow-lg"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-xl p-5 shadow-md flex flex-col justify-between"
              >
           
                <img
                  src={content.image}
                  alt={content.title}
                  className="h-[60%] w-full object-cover rounded-lg mb-4"
                />

              
                <div className="flex flex-col gap-2">
                  <h5 className="font-bold text-lg">{content.title}</h5>
                  <p className="text-gray-600 text-sm">{content.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
