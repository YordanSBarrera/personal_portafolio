import "react-multi-carousel/lib/styles.css";
import colorSharp from "../../assets/img/color-sharp.png";
import CarouselSkill from "./CarouselSkill";

const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <h5 className="mt-3"> Frontend</h5>
              <p className="m-0">
                <span>
                  <b>React:</b> Desarrollo de interfaces de usuario dinámicas y
                  componentes reutilizables.
                  <br />
                  <b>TypeScript:</b> Programación tipada para mayor seguridad y
                  mantenibilidad del código.
                  <br />
                  <b>Material-UI (MUI):</b>Implementación de componentes y
                  estilos modernos.
                </span>
              </p>
              <h5 className="mt-3"> Backend (Interés)</h5>
              <p className="m-0">
                <span>
                  <b> Node.js:</b> Conocimientos básicos en la creación de
                  aplicaciones backend.
                  <br />
                  <b> Express:</b> Familiaridad con la construcción de APIs
                  RESTful.
                  <br />
                  <b> Bases de Datos:</b> Experiencia inicial con MongoDB y
                  MySQL.
                </span>
              </p>
              <h5 className="mt-3"> Otras Herramientas</h5>
              <p className="m-0">
                <span>
                  <b>Git & GitHub:</b> Control de versiones y colaboración en
                  proyectos.
                  <br />
                  <b>Responsive Design:</b> Diseño y desarrollo adaptable a
                  diferentes dispositivos.
                </span>
              </p>
              <CarouselSkill />
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="color" />
    </section>
  );
};

export default Skills;
