import "./App.css";
import Banner from "./components/Banner";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <Skills />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default App;
