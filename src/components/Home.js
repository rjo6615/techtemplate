import { Card, Row, Container, Col } from 'react-bootstrap';


function Home() {
    return(
<div>
  <div style={{ position: "relative" }}>
    <img
      src="./images/computerondesk.png"
      alt="Computer on Desk"
      style={{ width: "100%", height: "500px", objectFit: "cover", display: "block" }}
    />
    <div style={{ maxWidth: "400px", position: "absolute", top: "30%", left: "25%", transform: "translate(-30%, -25%)" }}>
      <h1 style={{ fontSize: "50px", color: "#fff", padding: "10px 20px", borderRadius: "5px", textAlign: "left" }}>Helping clients since 2023.</h1>
      <p style={{ fontSize: "20px", color: "#fff", padding: "10px 20px", borderRadius: "5px", textAlign: "left" }}>Byte Bridge Solutions is a technical solutions company, working with customers to create their dream.</p>
    </div>
  </div>
  <Container className="mt-5">
  <Row>
    <Col md={6}>
      <h1 className="text-left">We provide an array of services</h1>
    </Col>
    <Col md={6}>
      <p className="text-left">We at Byte Bridge Solutions offer a variety of services to help your company enter into the modern age. This includes Web Design, Computer Repair, and General Technical Support.</p>
    </Col>
  </Row>
</Container>
  <Container>
    <Row className="d-flex flex-wrap justify-content-center">
      <Card className="text-black mt-4 mx-3" style={{ border: "none", maxWidth: "400px" }}>
        <Card.Img src="./images/webdesign.png" alt="Card image" style={{ height: "300px", width: "400px" }} />
      </Card>

      <Card className="text-white mt-4 mx-3" style={{ border: "none", maxWidth: "400px" }}>
        <Card.Img src="./images/computerrepair.avif" alt="Card image" style={{ height: "300px", width: "400px" }} />
      </Card>

      <Card className="text-white mt-4 mx-3" style={{ border: "none", maxWidth: "400px" }}>
        <Card.Img src="./images/techsupport.jpg" alt="Card image" style={{ height: "300px", width: "400px" }} />
      </Card>
    </Row>
  </Container>
</div>
   )
}

export default Home;