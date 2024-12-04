import { createElement, useState } from "react";
import { content } from "../Content";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};
Modal.setAppElement("#root");

const Skills = () => {
  const { skills } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
    
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex items-center gap-2">
          <img className="h-10" src={selectSkill?.logo} alt="..." />
          <h6>{selectSkill?.name}</h6>
        </div>
        <br />
        <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
          <li>As a beginner, I have a solid understanding of the foundational concepts and have applied them in small-scale projects to strengthen my skills.</li>
          <li>I am familiar with essential tools, frameworks, and best practices, which allows me to write clean and efficient code.</li>
          <li>While my experience is limited, I am eager to learn and quickly adapt to new challenges and technologies.</li>
          <li>
            I have completed specific tutorials and certifications, to validate my understanding and demonstrate my commitment to growth in this area.
          </li>
          <li>
            My portfolio showcases beginner-level projects, highlighting my ability to implement what I’ve learned and my potential to grow further in this field.
          </li>
        </ul>
        <br />
        <div className="flex justify-end">
          <button onClick={closeModal} className="btn">
            Close
          </button>
        </div>
      </Modal>

    
      <div className="md:container px-5 py-14">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="text-lg md:text-xl text-center text-gray-600 mb-12" data-aos="fade-down">
          {skills.subtitle}
        </h4>

        <div className="flex flex-wrap gap-4 justify-center">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 400}
              className="bg-white sm:cursor-pointer relative group w-full sm:w-[45%] md:w-[30%] lg:w-[22%] p-5 max-w-sm rounded-md border-2 border-slate-200 shadow-md hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-center mb-4">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-14 group-hover:scale-125 duration-200"
                />
              </div>
              <div>
                <h6 className="font-semibold text-lg text-center">{skill.name}</h6>
                <p className="italic text-center">{skill.para}</p>
                <div
                  onClick={() => {
                    setSelectSkill(skill);
                    openModal();
                  }}
                  className="absolute top-3 right-3 text-xl cursor-pointer"
                >
                  {createElement(skills.icon)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
