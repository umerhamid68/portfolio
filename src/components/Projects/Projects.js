// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

// function Projects() {
//   return (
//     <Container fluid className="project-section">
//       <Particle />
//       <Container>
//         <h1 className="project-heading">
//           My Recent <strong className="purple">Works </strong>
//         </h1>
//         <p style={{ color: "white" }}>
//           Here are a few projects I've worked on recently.
//         </p>
//         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={chatify}
//               isBlog={false}
//               title="Chatify"
//               description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
//               ghLink="https://github.com/soumyajit4419/Chatify"
//               demoLink="https://chatify-49.web.app/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={bitsOfCode}
//               isBlog={false}
//               title="Bits-0f-C0de"
//               description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
//               ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
//               demoLink="https://blogs.soumya-jit.tech/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={editor}
//               isBlog={false}
//               title="Editor.io"
//               description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
//               ghLink="https://github.com/soumyajit4419/Editor.io"
//               demoLink="https://editor.soumya-jit.tech/"              
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={leaf}
//               isBlog={false}
//               title="Plant AI"
//               description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
//               ghLink="https://github.com/soumyajit4419/Plant_AI"
//               demoLink="https://plant49-ai.herokuapp.com/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={suicide}
//               isBlog={false}
//               title="Ai For Social Good"
//               description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
//               ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
//               // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={emotion}
//               isBlog={false}
//               title="Face Recognition and Emotion Detection"
//               description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
//               Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
//               ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
//               // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
//             />
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default Projects;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pleadsmart from "../../Assets/Projects/pleadsmart.png";
import alzheimers from "../../Assets/Projects/alzheimers.png";
import retroTunes from "../../Assets/Projects/retrotunes.png";
import resilienceLibrary from "../../Assets/Projects/resilience.png";
import cellClassification from "../../Assets/Projects/cellclassification.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pleadsmart}
              isBlog={false}
              title="PleadSmart"
              description="Developed an AI chat-bot for legal case analysis using Python, Streamlit, Llama 3, Mixtral 8x22b, Vectara, and Together AI. Built for lawyers, the chat-bot intelligently fetches similar case precedents as specified by the user from a corpus, streamlining case preparation and legal research."
              ghLink="https://github.com/Hsn37/pleadsmart"
              demoLink="https://pleadsmart-6zk4piupvccr8ksqtebbup.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alzheimers}
              isBlog={false}
              title="Alzheimer's MRI Scan Classification AI"
              description="Enhanced early Alzheimer's diagnosis by categorizing MRI scans into four distinct stages using YOLOv8, ViT, BEiT, and resnet50. Achieved 78% accuracy after dealing with issues like Poor Image Quality and Data Imbalance."
              ghLink="https://github.com/umerhamid68/Alzheimers-MRI-Classification"
              demoLink="https://alzheimers-mri-classification-9uxzjvozk7kymdeytjjnze.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={retroTunes}
              isBlog={false}
              title="Retro Tunes"
              description="A music player and marketplace for retro tunes. Users can buy retro tunes and play music similar to Spotify. Developed using modern web technologies for a seamless music experience."
              ghLink="https://github.com/mustafaahsan10/RetroTunes"
              //demoLink="https://retro-tunes-demo.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resilienceLibrary}
              isBlog={false}
              title="Resilience Library"
              description="A library providing resilience mechanisms like rate limiter, circuit breaker, and semaphore in TypeScript. Supports different strategies for resilience and ensures graceful degradation in applications."
              ghLink="https://github.com/umerhamid68/resilience-library"
              //demoLink="https://resilience-library-demo.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cellClassification}
              isBlog={false}
              title="Cell Classification AI"
              description="Developed for a competition to classify cellular images into normal or mitotic categories using ViT, BEiT image transformers, and YOLO v8. Achieved a commendable 10th position with the highest model accuracy reaching 88.059%."
              demoLink="https://www.kaggle.com/competitions/softec-aic-2024"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

