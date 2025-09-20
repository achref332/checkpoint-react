import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Card, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <div className="App">
        {/* Navbar */}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#">Mon App React</Navbar.Brand>
          </Container>
        </Navbar>

        {/* Titre */}
        <Container className="mt-4">
          <h1 className="text-center mb-4">Bienvenue dans mon projet React !</h1>

          {/* Trois cartes */}
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Carte 1</Card.Title>
                  <Card.Text>Contenu de la première carte.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Carte 2</Card.Title>
                  <Card.Text>Contenu de la deuxième carte.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Carte 3</Card.Title>
                  <Card.Text>Contenu de la troisième carte.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
