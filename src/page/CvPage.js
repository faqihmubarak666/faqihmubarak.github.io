import React, { Component } from "react";
import "../style/CvPage.css";
import { Card, Image, Row, Col } from "react-bootstrap";
import foto_cv from "../image/foto_cv.jpg";

class HomePage extends Component {
  render() {
    return (
      <div className="cv_page_component">
        <div className="container">
          <div className="box">
            <Card>
              <div className="header_cv">
                <Card.Header>CURRICULUM VITAE</Card.Header>
              </div>
              <Card.Body>
                <Image className="image_cv" src={foto_cv} roundedCircle />
                <div className="education">
                  <Card.Title
                    style={{ fontWeight: "bold", textAlign: "center" }}
                  >
                    PENDIDIKAN <i class="fas fa-graduation-cap" />
                  </Card.Title>
                  <hr />

                  <Row>
                    <Col>
                      <Card className="card_education" border="primary">
                        <Card.Body>
                          <Card.Title>
                            Universitas Islam Attahiriyah - Teknik Informatika
                          </Card.Title>
                          <Card.Text> 2015 - 2019</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </div>
                <div className="experience">
                  <Card.Title
                    style={{ fontWeight: "bold", textAlign: "center" }}
                  >
                    PENGALAMAN KERJA <i class="fas fa-briefcase" />
                  </Card.Title>
                  <hr />

                  <Row>
                    <Col>
                      <Card className="card_experience" border="primary">
                        <Card.Body>
                          <Card.Title>
                            PT. Sarana Media Pengamat - Phone Verifikator
                          </Card.Title>
                          <Card.Text>April 2014 - November 2015</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Card className="card_experience" border="primary">
                        <Card.Body>
                          <Card.Title>
                            Hadisumarto & Partners - Keuangan
                          </Card.Title>
                          <Card.Text> Agustus 2016 - Juli 2019</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <br />

                  <Row>
                    <Col>
                      <Card className="card_experience" border="primary">
                        <Card.Body>
                          <Card.Title>
                            PT. Aplikasi Karya Anak Bangsa - Sales Support
                            Project
                          </Card.Title>
                          <Card.Text> Desember 2019 - Januari 2020</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Card className="card_experience" border="primary">
                        <Card.Body>
                          <Card.Title>
                            PT. Aplikasi Karya Anak Bangsa - Staf Lapangan
                            Project
                          </Card.Title>
                          <Card.Text> Februari 2020 - Maret 2020</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <br />

                  <Row>
                    <Col>
                      <Card className="card_experience" border="primary">
                        <Card.Body>
                          <Card.Title>
                            PT. Aplikasi Karya Anak Bangsa - Data Entry Project
                          </Card.Title>
                          <Card.Text> Oktober 2020</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Card className="card_experience" border="primary">
                        <Card.Body>
                          <Card.Title>
                            PT. Telkom Indonesia - Staf Help Desk & Monitoring
                          </Card.Title>
                          <Card.Text> Desember 2020 - Januari 2021</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
