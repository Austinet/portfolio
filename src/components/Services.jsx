import { FaLaptopCode, FaChalkboardTeacher } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import useModeContext from "../hooks/useModeContext";

const servicesList = [
  {
    title: "Frontend Web Development",
    description: `I create visually appealing user interfaces with plain HTML, CSS, and JavaScript, as well as using
    libraries and frameworks such as ReactJs and Tailwind CSS.`,
    icon: <FaLaptopCode className="text-[4rem] inline-block" />,
    delay: 400,
  },
  {
    title: "Tutoring and Mentoring",
    description: `I tutor and mentor newbies in Tech, with classes and mentorship based on Web Development in particular,
    and Computer Science in general.`,
    icon: <FaChalkboardTeacher className="text-[4rem] inline-block" />,
    delay: 400,
  },
  {
    title: "Technical Writing",
    description: `I write articles based on Web Development in particular,
    and Computer Science in general.`,
    icon: <FaPenToSquare className="text-[4rem] inline-block" />,
    delay: 400,
  },
];
const Services = () => {
  const {mode} = useModeContext()

  return (
    <section id="services" className={`${mode === "dark" ? "bg-very-dark" : ""}`}>
      <div className="max-w-[1250px] mx-auto px-[1rem] py-[1.5rem] lg:py-[5rem] text-center">
        <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold leading-normal mb-[2rem] md:mb-[3.5rem]" data-aos="fade-up" data-aos-delay="100">
          SERVICES
        </h2>
        <h3 className="text-left text-[1.1rem] lg:text-[1.5rem] font-medium leading-normal my-[2rem]">
          I offer services such as:
        </h3>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[1.5rem] lg:mb-[2rem]" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
          {servicesList.map((service) => (
            <div
              key={service.title}
              className={`w-[340px] h-[320px] px-[1rem] py-[1.5rem] shadow-lg border  rounded-lg ${mode === "dark" ? "border-secondary" : "border-[#006ca5]"}`}
            >
              <p className={`${mode === "dark" ? "text-secondary" : "text-[#006ca5]"}`}>{service.icon}</p>
              
              <h4 className="text-[1.25rem] font-semibold leading-normal my-[1rem]">
                {service.title}
              </h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
