import profilePicture from "../assets/images/profile.jpg";
import { Link } from "react-router-dom";
import {
  FaEye,
  FaPhoneAlt ,
} from "react-icons/fa";
import useModeContext from "../hooks/useModeContext";

const About = () => {
  const {mode} = useModeContext()

  return (
    <section id="about" className={` ${mode === "light" ? "bg-[#EAF6F6]" : ""}`} data-aos="fade-up" data-aos-delay="200">
      {/* about-container */}
      <div className="px-[1rem] py-[1.5rem] lg:px-[3.5rem] lg:py-[4rem] text-center">
        {/* about image */}
        <div className="mt-[1rem] md:mt-0" data-aos="zoom-in"  data-aos-duration="2000">
          <img
            src={profilePicture}
            alt="A picture of Udhe Austine Ogaga"
            className={`md:w-[300px] md:h-[300px] w-[200px] h-[200px] mx-auto rounded-full border-[5px]  ${mode === "light" ? " border-[#006ca5]" : "hover:border-white border-secondary"}`}
          />
        </div>

        {/* about text */}
        <div className="max-w-[700px] mx-auto mt-[1.5rem] md:mt-[1.2rem]">
          <h1 className="text-[1.4rem] md:text-[2rem]  leading-normal">
            <span>Hi, I&apos;m</span> <span className="font-semibold">Udhe Austine Ogaga</span>
          </h1>
          <h2 className="text-[1.3rem] md:text-[1.5rem] font-medium leading-normal md:mb-[1.5rem] mb-[1.2rem]">
            Frontend Web Developer
          </h2>
          <p className="text-[0.95rem] md:text-[1.25rem] leading-normal">
            I design and develop aesthetically pleasing, accessible,
            interactive, search engine optimized and responsive webpages,
            creating seamless web experiences for users and connecting
            businesses to customers. I love learning new things and adapting to
            new technologies, and improvements in the Tech space.
          </p>
          <div className="flex justify-center gap-[1.5rem] lg:gap-[2rem] mt-[2rem]">
            <Link
              to={"https://drive.google.com/file/d/1f9JIddKX73VU2jrifkfIoy8WyQESHjEE/view?usp=drivesdk"}
              className={`buttons w-[10rem] md:w-[11.5rem] h-[3.5rem] lg:h-[4rem] font-semibold md:text-[1.25rem] text-[1.1rem] ${mode === "dark" ? "dark-bg-buttons" : "light-bg-buttons"} rounded-lg`}
            >
              <FaEye /> <span>View CV</span>
            </Link>
            <a
              href="#contact"
              className={`buttons w-[10rem] md:w-[11.5rem] h-[3.5rem] lg:h-[4rem] font-semibold md:text-[1.25rem] text-[1.1rem] ${mode === "dark" ? "dark-outline-buttons" : "light-outline-buttons"} rounded-lg`}
            >
              <FaPhoneAlt /> <span>Contact me</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
