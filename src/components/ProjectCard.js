import { Col } from "react-bootstrap";
import './css/ProjectCard.css';

export const ProjectCard = ({ title, year, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={link} target="_blank" rel="noreferrer">
        <div className="proj-imgbx">
          <img src={imgUrl} alt="" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <h6>{year}</h6> <br />
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  )
}
