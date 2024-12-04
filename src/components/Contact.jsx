import { createElement } from "react"; 
import { content } from "../Content"; 

const Contact = () => {
  const { Contact } = content;

  return (
    <section className="bg-dark_primary text-white" id="contact">
      <div className="md:container px-5 py-24">
        <center>
          <h2 className="title !text-white" data-aos="fade-down">
            {Contact.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Contact.subtitle}
          </h4>
        </center>
        <br /><br /><br /><br />
        <div className="flex flex-wrap justify-center gap-10">
         
          {Contact.social_media.map((content, i) => (
           <div
           key={i}
           data-aos="fade-up"
           data-aos-delay={i * 300}
           className="flex flex-col items-center gap-3 w-full sm:w-40"
         >
       
           <div className="text-4xl sm:text-5xl md:text-6xl text-white">
             {createElement(content.icon)}
           </div>
         
         
           <a
             className="font-Poppins text-sm sm:text-base md:text-lg text-white text-center"
             href={content.link}
             target="_blank"
             rel="noopener noreferrer"
           >
             {content.text}
           </a>
         </div>
         
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
