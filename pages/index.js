import Layout from '../components/Layout';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <Layout>
      <nav className="fixed top-0 left-0 w-full bg-ocean-light dark:bg-ocean-dark p-2">
        <ul className="flex justify-around">
          <li><a href="#about" className="hover:underline">About Me</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#skills" className="hover:underline">Skills</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
}
