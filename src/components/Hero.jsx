import { content } from "../Content";

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden pt-16">
      <div className="h-screen relative flex flex-col md:flex-row-reverse md:items-center justify-center">
    
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-full top-0 right-0 bottom-0 -z-10"
        ></div>

      
        <div className="px-6 py-12 md:py-0 md:w-6/12 w-full text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold" data-aos="fade-down">
            {hero.title}
          </h2>
          <br />
          <div className="flex flex-col gap-5">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center gap-5 ${
                  i === 1 ? "flex-row-reverse text-left" : ""
                }`}
              >
              <div>
                    <p className="text-sm md:text-base">{content.text}</p>

                  </div>

              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-6/12 h-48 md:h-[110vh] flex items-center justify-center">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="Hero"
            className="h-full w-auto max-w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
