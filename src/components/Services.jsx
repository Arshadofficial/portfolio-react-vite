import { content } from "../Content";

const Services = () => {
  const { services } = content;

  return (
    <section id="services">
      <div className="md:container px-5 py-14">
      
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-6"
          data-aos="fade-down"
        >
          {services.title}
        </h2>
        <h4
          className="text-lg md:text-xl text-center text-gray-600 mb-12"
          data-aos="fade-down"
        >
          {services.subtitle}
        </h4>

     
        <div className="flex gap-5 justify-center flex-wrap group">
          {services.service_content.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className="min-w-[14rem] sm:w-[18rem] lg:w-[22rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 
              group-hover:blur-sm hover:!blur-none transition-all"
            >
              <img
                src={content.logo}
                alt={content.title}
                className="mx-auto w-16 h-16 object-contain mb-4"
              />
              <h6 className="my-3 text-xl font-semibold">{content.title}</h6>
              <p className="leading-7 text-sm">{content.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
