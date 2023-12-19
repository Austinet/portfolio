import { Link } from "react-router-dom";
import project1 from "../assets/images/countries.jpg";
import project2 from "../assets/images/ecommerce.png";
import project3 from "../assets/images/bookmark.png";
import project4 from "../assets/images/weather.png";
import project5 from "../assets/images/product.png";
import project6 from "../assets/images/linktree.png";
import project7 from "../assets/images/gym.jpg";
import project8 from "../assets/images/task.png";
import project9 from "../assets/images/easybank.png";
import project10 from "../assets/images/credit-card.png";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import useModeContext from "../hooks/useModeContext";
const projectList = [
  {
    id: 1,
    name: "Countries API",
    description: ``,
    screenshot: project1,
    tools: ["HTML", "CSS", "JavScript", "REST API", "Web Storage"],
    live: "https://austinet.github.io/countriesAPI/",
    repository: "https://github.com/Austinet/countriesAPI.git",
  },
  {
    id: 2,
    name: "KodeCamp E-commerce",
    description: ``,
    screenshot: project2,
    tools: ["ReactJs", "Tailwind CSS", "REST API", "Web Storage"],
    live: "https://kodecamp-ecommerce-austinet.netlify.app",
    repository: "https://github.com/Austinet/kodecamp-ecommerce.git",
  },
  {
    id: 3,
    name: "Bookmark Landing page",
    description: ``,
    screenshot: project3,
    tools: ["ReactJs", "SCSS"],
    live: "https://austinet-bookmark.netlify.app",
    repository: "https://github.com/Austinet/bookmark.git",
  },
  {
    id: 4,
    name: "Weather App",
    description: ``,
    screenshot: project4,
    tools: [
      "ReactJs",
      "Tailwind CSS",
      "REST API",
      "Geo Location",
      "Web Storage",
    ],
    live: "https://weather-app-austinet.netlify.app",
    repository: "https://github.com/Austinet/weather-app.git",
  },
  {
    id: 5,
    name: "Snickers product page",
    description: ``,
    screenshot: project5,
    tools: ["ReactJs", "Tailwind CSS"],
    live: "https://ecommerce-product-page-austinet.netlify.app",
    repository: "https://github.com/Austinet/ecommerce-product-page",
  },
  {
    id: 6,
    name: "KodeCamp Link Tree",
    description: ``,
    screenshot: project6,
    tools: ["ReactJs", "CSS"],
    live: "https://austinet.github.io/linktree/",
    repository: "https://github.com/Austinet/linktree.git",
  },
  {
    id: 7,
    name: "Gym2Fit",
    description: ``,
    screenshot: project7,
    tools: ["HTML", "Bootstrap"],
    live: "https://austinet.github.io/gym2fit/",
    repository: "https://github.com/Austinet/gym2fit.git",
  },
  {
    id: 8,
    name: "Task Management App",
    description: ``,
    screenshot: project8,
    tools: ["ReactJs", "CSS"],
    live: "https://austinet.github.io/task-manager-app/",
    repository: "https://github.com/Austinet/task-manager-app.git",
  },
  {
    id: 9,
    name: "EasyBank Landing page",
    description: ``,
    screenshot: project9,
    tools: ["ReactJs", "Tailwind CSS"],
    live: "https://austinet.github.io/easybank-landing-page",
    repository: "https://github.com/Austinet/easybank-landing-page.git",
  },
  {
    id: 10,
    name: "Credit Card Creator",
    description: ``,
    screenshot: project10,
    tools: ["HTML", "CSS", "JavaScript"],
    live: "https://austinet.github.io/interactiveCard/",
    repository: "https://github.com/Austinet/interactiveCard.git",
  },
];

const Projects = () => {
  const {mode} = useModeContext()

  return (
    <section id="portfolio"  className={`${mode === "dark" ? "bg-very-dark" : "bg-[#006ca5]"}`}>
      <div className="max-w-[1250px] mx-auto px-[1rem] py-[1.5rem] lg:py-[4rem] text-center text-white">
        <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold leading-normal mb-[2rem] md:mb-[3.5rem]" data-aos="fade-up" data-aos-delay="100">
          PROJECTS
        </h2>
        <h3 className="text-left text-[1.1rem] lg:text-[1.5rem] font-medium leading-normal my-[2rem]">
          Projects I&apos;ve worked on, excluding confidential projects:
        </h3>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 items-center justify-between gap-[1.5rem] gap-y-[2rem] xl:gap-[2.5rem] md:gap-y-[3.5rem]">
          {projectList.map((project) => {
            const {
              id,
              name,
              screenshot,
              tools,
              description,
              repository,
              live,
            } = project;
            return (
              <div
                key={id}
                className={`${mode === "dark" ? "bg-light-dark" : "bg-[#EAF6F6] backdrop-blur-md text-very-dark"} shadow-card  border-secondary rounded-lg`}
                data-aos="fade-left" data-aos-delay={id * 100 + 100} >
                <div className="h-[250px] rounded-md relative">
                  <img
                    src={screenshot}
                    alt="Project screenshot"
                    className="h-full w-full rounded-md"
                  />
                  <div className="absolute bg-[#0000005d] backdrop-blur-sm left-0 bottom-0 w-full rounded-b-md">
                    <ul className="flex gap-[1.3rem] justify-center items-center py-[1.2rem] rounded-b-md">
                      <li>
                        <Link
                          className={`buttons ${mode === "dark" ? "dark-bg-buttons" : "light-bg-buttons"} w-[8rem] h-[2.8rem] font-medium text-[1.1rem] rounded-md`}
                          to={live}
                        >
                          <HiOutlineExternalLink />
                          <span>View Site</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`buttons  ${mode === "dark" ? "dark-outline-buttons" : "light-outline-buttons"} w-[8rem] h-[2.8rem] font-medium text-[1.1rem] leading-normal rounded-md`}
                          to={repository}
                        >
                          <FaGithub />
                          <span>Github</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="h-[120px] px-[1rem] py-[1rem]">
                  <h3 className={`${mode === "dark" ? "text-secondary" : "text-very-dark"} text-[1.15rem] md:text-[1.3rem] font-semibold mb-[0.3rem]`}>
                    {name}
                  </h3>
                  <p className="text-base md:text-md font-medium">
                    {tools.join(", ")}
                  </p>
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
