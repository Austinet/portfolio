import { useState } from "react"
import About from "../components/About"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Projects from "../components/Projects"
import Services from "../components/Services"
import SkillSet from "../components/SkillSet"
import Testimonials from "../components/Testimonials"
import useModeContext from "../hooks/useModeContext"

const Home = () => {
  const {mode} = useModeContext()

  return (
    <div className={`overflow-hidden ${mode === "light" ? "text-primary-dark bg-primary-light" : "text-primary-light bg-primary-dark"}`}>
    <Header />
    <main className="">
        <About />
        <SkillSet />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
    </main>
    <Footer />
    </div>
  )
}

export default Home