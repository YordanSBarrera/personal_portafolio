import "./App.css";
import Banner from "./components/Banner";
// import Contact from "./components/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

const Body = () => {
  return (
    <>
      <Banner />
      <Projects />
      <Skills />
      {/* <Contact /> */}
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
