import { Col } from "react-bootstrap";

type ProjectCardProps = {
  title: string;
  description: string;
  imgUrl: string;
};

const ProjectCard = ({ title, description, imgUrl }: ProjectCardProps) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" width="500px" height="320px" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
