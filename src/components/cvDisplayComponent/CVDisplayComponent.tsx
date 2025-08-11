import './CVDisplayComponent.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { Document, Page, pdfjs } from "react-pdf";
import React, { useEffect, useState } from "react";
import { Link, To } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const CV: React.FC = () => {
  return (
    <div className="cv">
      <Document file="Patryk_Wos_CV.pdf">
        <Page pageNumber={1} scale={1.4} renderTextLayer={false} renderAnnotationLayer={true} />
      </Document>
      <div className='buttons-group'>
        <Link to={-1 as To} className="link-button link-button--black">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <a href="https://www.overleaf.com/read/csrkvckzjnyk#96031f"
          target="_blank"
          rel="noopener noreferrer"
          className="link-button link-button--black">CV Source Code</a>
        <a href="Patryk_Wos_CV.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="link-button link-button--black">Download CV</a>
      </div>
    </div>
  );
};

export default CV;
