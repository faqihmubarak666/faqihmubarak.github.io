import React, { Component } from "react";
import foto_fm from "../image/foto_fm.jpg";
import { Container, Row, Col } from "react-bootstrap";
import SlideImage from "../component/SlideImage";
import "../style/HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <div className="container-home">
        <SlideImage />
        <hr />
        <Container>
          <Row>
            <Col>
              <h1>Tentang saya</h1>
              <p>
                Lahir di Cirebon, 12 April 1996. Saya menerima gelar sarjana
                Teknik Informatikan di Universitas Islam Attahiriyah pada tahun
                2019. Saya adalah orang yang antusias dengan segala hal berbau
                pemograman terutama dalam bidang front end dan selalu tertantang
                untuk membuat proyek-proyek baru pembuatan web.
              </p>
            </Col>
            <Col>
              <div className="col">
                <img src={foto_fm} alt="Foto" height="300" width="300" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomePage;
