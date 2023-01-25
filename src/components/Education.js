import { Container } from "react-bootstrap";

import './css/Education.css';

export const Education = () => {
    return (
        <section className="education" id="education">
            <Container>
                <div className="text-center">
                    <h2>Education</h2>
                    <p>Languages, Framework & Database</p>
                    <div className="time">
                        <div className="timeline">
                            <ul>
                                <li>
                                    <h3 className="heading">PUBLIC HIGH SCHOOL 1 CIMALAKA</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus
                                        totam </p>
                                    <span className="date">2017 - 2020</span>
                                    <span className="circle"></span>
                                </li>
                                <li style={{ textAlign: "left" }}>
                                    <h3 className="heading">SEKOLAH TINGGI TEKNOLOGI BANDUNG</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus
                                        totam </p>
                                    <span className="date">2020 - Present</span>
                                    <span className="circle"></span>
                                </li>
                                <li>
                                    <h3 className="heading">LITHAN Pvt. Ltd.</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus
                                        totam </p>
                                    <span className="date">2022 - Present</span>
                                    <span className="circle"></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </section >
    )
}
