import {
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCaretSquareUp,
} from "react-icons/fa";
import useModeContext from "../hooks/useModeContext";

const Footer = () => {
  const { mode } = useModeContext();

  return (
    <footer>
      <div
        className={`text-center relative pt-[8rem] pb-[2rem] px-[1rem] ${
          mode === "dark" ? "bg-very-dark" : "bg-[#0f5481]"
        }`}
      >
        
        <div data-aos="fade-up" data-aos-delay="100">
          {/* Socials */}
          <ul className="flex justify-center items-center gap-[1.2rem]">
            <li>
              <a href="https://github.com/Austinet">
                {" "}
                <FaGithub className={`${iconStyle}`} />{" "}
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/udhe-austine-ogaga">
                {" "}
                <FaLinkedin className={`${iconStyle}`} />{" "}
              </a>
            </li>
            <li>
              <a href="https://facebook.com/udhe.austine">
                {" "}
                <FaFacebookF className={`${iconStyle}`} />{" "}
              </a>
            </li>
            <li>
              <a href="https://twitter.com/austineudhe">
                {" "}
                <FaTwitter className={`${iconStyle}`} />{" "}
              </a>
            </li>
          </ul>

          <p className="my-[1.2rem] text-white">
          {" "}
          Copyright &copy; 2023 All rights reserved, Udhe Austine Ogaga
        </p>
        </div>
       
        <div className="fixed z-20 right-[2rem] bottom-[1.5rem] bg-[#000000d0] rounded-full">
          <a href="#header">
            {" "}
            <FaCaretSquareUp className={`${iconStyle}`} />
          </a>
        </div>
      </div>
    </footer>
  );
};

const iconStyle =
  "text-white border rounded-full text-[2.5rem] p-[0.4rem] inline-block hover:text-secondary  hover:border-secondary transition-all duration-300 ease-in-out";

export default Footer;
