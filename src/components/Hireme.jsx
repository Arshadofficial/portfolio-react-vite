import { content } from "../Content";

const Hireme = () => {
  const { Hireme } = content;

  return (
    <section className="bg-bg_light_primary py-10 md:py-14">
      <div className="md:container px-5">
       <center>
          <h2 className="title" data-aos="fade-down">
            {Hireme.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Hireme.subtitle}
          </h4>
        </center> 
        <br />
        <div className="flex flex-col-reverse md:flex-row items-center gap-6">
          
          <div
            data-aos="fade-left"
            className="max-w-full md:max-w-[2000px] p-4 shadow-sm rounded-xl"
          >
            <p className="leading-7 text-sm md:text-base">{Hireme.para}</p>
            <br />
            <button className="btn bg-dark_primary text-white mt-4 md:mt-6">
              {Hireme.btnText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
