// import React, { useState } from "react";
// import Particle from "./Particle";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";

// function Contact() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     window.location.href = `mailto:umerhamid168@gmail.com?subject=Contact from ${name}&body=${message}`;
//   };

//   return (
//     <Container fluid className="contact-section">
//       <Particle />
//       <Container>
//         <Row>
//           <Col md={12} className="contact-heading">
//             <h1 className="purple">Contact Me</h1>
//             <p>Feel free to drop me a message. I'll get back to you as soon as possible.</p>
//           </Col>
//         </Row>
//         <Row className="contact-form-row">
//           <Col md={8} className="mx-auto">
//             <Form onSubmit={handleSubmit}>
//               <Form.Group controlId="formName">
//                 <Form.Label>Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter your name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   required
//                 />
//               </Form.Group>

//               <Form.Group controlId="formEmail">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control
//                   type="email"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </Form.Group>

//               <Form.Group controlId="formMessage">
//                 <Form.Label>Message</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={3}
//                   placeholder="Enter your message"
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   required
//                 />
//               </Form.Group>

//               <Button variant="primary" type="submit" className="mt-3">
//                 Send
//               </Button>
//             </Form>
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default Contact;



import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "./Particle";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:umerhamid168@gmail.com?subject=Contact from ${name}&body=${message}`;
  };

  return (
    <Container fluid className="contact-section">
      <Container>
        <Row>
          <Col md={12} className="contact-heading">
            <h1 className="project-heading"> <strong className="purple">Contact</strong> Me</h1>
            <p>Feel free to drop me a message. I'll get back to you as soon as possible.</p>
          </Col>
        </Row>
        <Row className="contact-form-row">
          <Col md={8} className="mx-auto">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>NAME</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>EMAIL ADDRESS</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>MESSAGE</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3">
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
