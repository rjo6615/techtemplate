import { Card, Row, Container } from 'react-bootstrap';


function About() {
    return(
        <div>
            <div style={{ position: "relative" }}>
    <img
      src="./images/aboutus.png"
      alt="Computer on Desk"
      style={{ width: "100%", height: "500px", objectFit: "cover", display: "block" }}
    />
    <div style={{ maxWidth: "400px", position: "absolute", top: "30%", left: "25%", transform: "translate(-30%, -25%)" }}>
      <h1 style={{ fontSize: "50px", color: "#fff", padding: "10px 20px", borderRadius: "5px", textAlign: "left" }}>The Company</h1>
      <p style={{ fontSize: "20px", color: "#fff", padding: "10px 20px", borderRadius: "5px", textAlign: "left" }}>Byte Bridge Solutions is a technical solutions company, working with customers to create their dream.</p>
    </div>
  </div>
  <div class="container py-4">
    <div class="row g-0 align-items-center">
      <div class="col-lg-6 mb-5 mb-lg-0">
        <div class="card cascading-right" style={{ background: "hsla(0, 0%, 100%, 0.55)", backdropFilter: "blur(30px)"}}>
          <div class="card-body p-5 shadow-5 text-center">
            <h2 class="fw-bold mb-5">About Us</h2>
           <p style={{ textAlign: "left" }}><span style={{marginLeft: "25px"}}>Welcome</span> to Byte Bridge Solutions, where technology meets innovation to drive the future.
            At Byte Bridge Solutions, we are a passionate team of tech enthusiasts, visionaries, and problem solvers. With a shared commitment to pushing the boundaries of what's possible, we embark on a journey to make a meaningful impact in the tech industry.
            Our Mission Our mission is simple yet powerful: to harness the limitless potential of technology to transform industries, empower businesses, and enrich lives. We believe that every challenge is an opportunity for innovation, and every problem is a chance to make the world a better place through tech-driven solutions.
            <br></br>
            <span style={{marginLeft: "25px"}}>What</span> Sets Us Apart Expertise: Our team consists of seasoned experts across a wide spectrum of tech domains. From software development to AI and machine learning, cybersecurity to cloud computing, we have the expertise to tackle the most complex tech challenges.
            Innovation: Innovation is in our DNA. We continually explore emerging technologies, experiment with new ideas, and stay ahead of the curve to ensure our solutions are not just current but future-proof.
            Client-Centric Approach: We put our clients at the heart of everything we do. Understanding your unique needs and challenges is the first step in delivering tailored tech solutions that drive your success.
            <br></br>
            <span style={{marginLeft: "25px"}}>Community</span> Engagement: We believe in giving back to the tech community. Through mentorship programs, open-source contributions, and educational initiatives, we are committed to nurturing the next generation of tech talent.
            Thank you for choosing Byte Bridge Solutions as your tech ally. We look forward to collaborating with you and making your tech aspirations a reality.</p>
          </div>
        </div>
      </div>

      <div class="col-lg-6 mb-5 mb-lg-0">
        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" class="w-100 rounded-4 shadow-4"
          alt="" />
      </div>
    </div>
  </div>
  <h1>Our Team.</h1>
  <Container>
    <Row className="d-flex flex-wrap justify-content-center">
    <Card className="text-black mt-4 mx-3" style={{ width: '18rem', height: '35rem' }}>
    <Card.Img variant="top" src="./images/chad.jpg" />
  <Card.Body className="d-flex flex-column">
    <Card.Title className='mb-4'>Chad</Card.Title>
    <Card.Text>
        <h5>Founder, CEO</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Suspendisse varius enim in eros elementum tristique. Duis cursus, 
           mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. 
        </p>
    </Card.Text>
  </Card.Body>
</Card>
<Card className="text-black mt-4 mx-3" style={{ width: '18rem', height: '35rem' }}>
    <Card.Img variant="top" src="./images/julia.jpg" />
  <Card.Body className="d-flex flex-column">
    <Card.Title className='mb-4'>Julia</Card.Title>
    <Card.Text>
        <h5>Front end developer</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Suspendisse variust. 
        </p>
    </Card.Text>
  </Card.Body>
</Card>
<Card className="text-black mt-4 mx-3" style={{ width: '18rem', height: '35rem' }}>
    <Card.Img variant="top" src="./images/jackie.png" />
  <Card.Body className="d-flex flex-column">
    <Card.Title className='mb-4'>Jackie</Card.Title>
    <Card.Text>
        <h5>Back end developer</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Suspendisse varius enim in eros elementum
           mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. 
        </p>
    </Card.Text>
  </Card.Body>
</Card>
<Card className="text-black mt-4 mx-3" style={{ width: '18rem', height: '35rem' }}>
    <Card.Img variant="top" src="./images/gloria.jpg" />
  <Card.Body className="d-flex flex-column">
    <Card.Title className='mb-4'>Gloria</Card.Title>
    <Card.Text>
        <h5>Human resources</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Suspendisse varius enim in eros elementum tristique. Duis cursus, 
           mi quis viverra ornare, eros dolor interdu. 
        </p>
    </Card.Text>
  </Card.Body>
</Card>
    </Row>
  </Container>
        </div>
    )
}

export default About;