import "./App.css";
import Banner from "./components/Banner";
// import Contact from "./components/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

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
