import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { GiPencilBrush } from "react-icons/gi";
import useModeContext from "../hooks/useModeContext";

const skillsList = [
  {
    id: 1,
    name: "HTML",
    icon: <FaHtml5 className="text-[4rem]" />,
    delay: 100,
  },
  {
    id: 2,
    name: "CSS",
    icon: <FaCss3Alt className="text-[4rem]" />,
    delay: 200,
  },
  {
    id: 3,
    name: "JavaScript",
    icon: <SiJavascript className="text-[4rem]" />,
    delay: 300,
  },
  {
    id: 4,
    name: "Sass",
    icon: <FaSass className="text-[4rem]" />,
    delay: 400,
  },
  {
    id: 5,
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-[4rem]" />,
    delay: 500,
  },
  {
    id: 6,
    name: "Bootstrap",
    icon: <BsBootstrapFill className="text-[4rem]" />,
    delay: 100,
  },
  {
    id: 7,
    name: "ReactJs",
    icon: <FaReact className="text-[4rem]" />,
    delay: 200,
  },
  {
    id: 8,
    name: "Git",
    icon: <FaGitAlt className="text-[4rem]" />,
    delay: 300,
  },
  {
    id: 9,
    name: "Github",
    icon: <FaGithub className="text-[4rem]" />,
    delay: 400,
  },
  {
    id: 10,
    name: "Graphic Design",
    icon: <GiPencilBrush className="text-[4rem]" />,
    delay: 500,
  },
];

const SkillSet = () => {
  const {mode} = useModeContext()
  
  return (
    <section id="skillset" className={`${mode === "dark" ? "" : "bg-[#EAF6F6] "}`}>
      <div className="max-w-[1250px] mx-auto px-[1rem] py-[1.5rem] lg:py-[4rem] text-center pt-[3rem]">
        <div>
          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold leading-normal md:mb-[3.5rem] mb-[2rem]" data-aos="fade-up" data-aos-delay="100">
            TECHNICAL SKILL SET
          </h2>
          <h3 className="text-left text-[1.1rem] lg:text-[1.5rem] font-medium leading-normal my-[2rem]">
            I am skilled in:
          </h3>
        </div>

        <div>
          <ul className="grid md:grid-cols-5 grid-cols-2 gap-[1.5rem] lg:gap-[2.5rem] justify-between">
            {skillsList.map((skill) => (
              <li key={skill.id} data-aos="fade-left" data-aos-delay={skill.delay}>
                <div className={`${mode === "dark" ? "bg-light-dark shadow-card" : "bg-[#0f5481] shadow-md"}  p-[1rem] rounded-lg flex flex-col gap-2 items-center justify-center`}>
                  <p className={`${mode === "dark" ? "text-secondary" : "text-[#EAF6F6]"}`}>{skill.icon}</p>
                  <h3 className={` sm:text-[1.1rem] font-semibold leading-normal ${mode === "dark" ? "text-secondary" : "text-[#EAF6F6]"}`}>
                    {skill.name}
                  </h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillSet;
